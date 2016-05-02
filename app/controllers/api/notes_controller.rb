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

  private

  def note_params
    params.require(:note).permit(:content)
  end

end
