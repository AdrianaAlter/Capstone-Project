class Api::CardsController < ApplicationController
  def index
    @cards = Card.where(list_id: current_list_id)
    render :index
  end

  def new
    render :new
  end

  def create
    @card = Card.new(card_params)
    @card.list_id = current_list_id
    if @card.save
      render json: @card
    else
      render :new
    end
  end

  def update
    @card = Card.find(params[:id])
    if @card.update(card_params)
      render json: @card
    else
      render :edit
    end
  end

  def destroy
    @card = Card.find(params[:id])
    @card.destroy

    if @card.sibling_cards.empty?
      @list = List.find(current_list_id)
      render json: @list
    else
      @cards = @card.sibling_cards
      render :index
    end
  end


  private

  def card_params
    params.require(:card).permit(:title)
  end

  def current_list_id
    params[:list_id]
  end

  # def sibling_cards(id)
  #   Card.where(list_id == current_list_id && id != id)
  #   debugger
  # end

end
