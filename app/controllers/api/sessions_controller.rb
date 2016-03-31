class Api::SessionsController < ApplicationController

  # def new
  #   render :new
  # end

  def create

    # if params[:user][:email].length >= 1
    #   @user = User.find_by_email(
    #     params[:user][:email],
    #     params[:user][:password]
    #   )
    # else
    
      @user = User.find_by_name(
        params[:name],
        params[:password]
      )
    # end

    if @user
      log_in(@user)
      render json: @user
    # else
    #   render :new
    end

  end

  def show
    if logged_in?
      render json: current_user
    else
      render json: { message: "Must log in to access show page" }, status: 401
    end
  end

  def destroy
    log_out
    render json: {}
  end

end
