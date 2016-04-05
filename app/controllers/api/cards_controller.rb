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

  private

  def card_params
    params.require(:card).permit(:title)
  end

  def current_list_id
    params[:list_id]
  end

end
