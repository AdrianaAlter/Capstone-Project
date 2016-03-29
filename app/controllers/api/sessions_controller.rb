class Api::SessionsController < ApplicationController

  def new
    render :new
  end

  def create

    if params[:user][:email]
      @user = User.find_by_email(
        params[:user][:email],
        params[:user][:password]
      )
    else
      @user = User.find_by_name(
        params[:user][:user_name],
        params[:user][:password]
      )
    end

    if @user
      log_in(@user)
    else
      render :new
    end

  end

  def destroy
    log_out
  end

end
