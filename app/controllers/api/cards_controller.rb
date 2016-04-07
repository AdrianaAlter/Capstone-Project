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

  def destroy
    @card = Card.find(params[:id])
    @card.destroy
    @cards = @card.sibling_cards
    render :index
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
