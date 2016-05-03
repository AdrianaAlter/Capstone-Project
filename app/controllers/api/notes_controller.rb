class Api::NotesController < ApplicationController

  def index
    @notes = Note.where(board_id: params[:board_id])
    render :index
  end

  def create
    @note = Note.new(note_params)
    @note.noter_id = current_user.id
    @note.board_id = params[:board_id]
    @note.save!
    render :show
  end

  def destroy
    @note = Note.find(params[:id])
    @note.destroy
    @notes = Note.where(board_id: current_board_id)
    render :index
    # @board = Board.find(current_board_id)
    # debugger
    # render "api/boards/show"
  end

  private

  def note_params
    params.require(:note).permit(:content)
  end

  def current_board_id
		params[:board_id]
	end

end
