class Api::CardsController < ApplicationController
  def index
    board = Board.find(current_board_id)
    @cards = board.cards
    render :index
  end

  def new
    render :new
  end

  def create
    @card = Card.new(card_params)

    if @card.save
      render json: @card
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

    @list = List.find(@card.list_id)
    render "api/lists/show"
  end


  private

  def card_params
    params.require(:card).permit(:title, :list_id)
  end

  # def current_list_id
  #   params[:list_id]
  # end

  def current_board_id
    params[:board_id]
  end

  # def sibling_cards(id)
  #   Card.where(list_id == current_list_id && id != id)
  #   debugger
  # end

end
