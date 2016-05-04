class Api::NotificationsController < ApplicationController

  def index
    @notifications = Notification.where(user_id: current_user.id)
  end

  def create
    @notification = Notification.new(user_id: params[:notification][:user_id], author_id: params[:notification][:author_id], board_id: params[:notification][:board_id])
    @notification.save!
    render :show
  end

  def destroy
    @notification = Notification.find(params[:id])
    @notification.destroy
    @notifications = Notification.where(user_id: current_user.id)
    render :index
  end

end
