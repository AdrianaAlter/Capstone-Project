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


	private

	def list_params
		params.require(:list).permit(:title)
	end

	def current_board_id
		params[:board_id]
	end



end
