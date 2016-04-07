class Api::ListsController < ApplicationController

	def index
    @lists = List.where(board_id: current_board_id)
    render :index
	end

	def new
		render :new
	end

	def create
		@list = List.new(list_params)
  	@list.board_id = current_board_id
    if @list.save
      render json: @list
    else
      render :new
    end
	end

  def show
    @list = List.find(params[:id])
    render :show
  end

  def update
    @list = List.find(params[:id])
    if @list.update(list_params)
      render json: @list
    else
      render :edit
    end
  end

  def destroy
    @list = List.find(params[:id])
    @list.destroy
    @lists = List.where(board_id: current_board_id)
    render :index
  end

	private

	def list_params
		params.require(:list).permit(:title)
	end

	def current_board_id
		params[:board_id]
	end



end
