class NotificationsController < ApplicationController

  def index
    # @notifications = Notification.where(note.noter.id: current_user.id)
  end

  def create
    @notification = Note.new(params[:note_id])
    @notification.save!
    render :show
  end

  def destroy
    @notification = Notification.find(params[:id])
    @notification.destroy
    @notifications = Notification.where(note.noter.id: current_user.id)
    render :index
  end

end
