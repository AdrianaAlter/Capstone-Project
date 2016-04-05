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
      render json: @board
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
      render json: @board
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
    @boards = current_user.boards
    render :index
  end

  private

  def board_params
    params.require(:board).permit(:title)
  end

end
