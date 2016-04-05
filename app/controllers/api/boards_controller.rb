class Api::BoardsController < ApplicationController

  # before_action :must_log_in

  def index
    @boards = current_user.boards
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
    @board = Board.find(params[:id])
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

  def show
    @board = Board.find(params[:id])
    render :show
  end

  def destroy
    @board = Board.find(params[:id])
    @board.destroy
    redirect_to api_boards_url
  end

  private

  def board_params
    params.require(:board).permit(:title)
  end

end
