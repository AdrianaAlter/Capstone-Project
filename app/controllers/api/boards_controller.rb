class Api::BoardsController < ApplicationController

  # before_action :must_log_in

  def index
    @boards = Board.find_by_author(current_user.id)
    render :index
  end

  def new
    render :new
  end

  def create
    @board = Board.new(board_params)
    @board.author_id = current_user.id
    if @board.save
      redirect_to api_boards_url
    else
      render :new
    end
  end

  def edit
    render :edit
  end

  def update
    @board = Board.find(params[:id])
    if @board.update(board_params)
      redirect_to api_boards_url
    else
      render :edit
    end
  end

  # def show
  #   @board = Board.find(params[:id])
  #   render :show
  # end

  def destroy
    @board = Board.find(params[:id])
    @board.destroy
    redirect_to api_boards_url
  end

  private

  def board_params
    params.require(:board).permit(:title, :description)
  end

end
