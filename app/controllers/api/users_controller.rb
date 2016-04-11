class Api::UsersController < ApplicationController

  def index
    @users = User.all
    render :index
  end

  def new
    @user = User.new
    render :new
  end

  def create

    @user = User.new(user_name: params[:name], password: params[:password])

    if @user.save
      log_in(@user)
    end
    render json: @user
  end


  def show
    @user = User.find(params[:id])
    render :show
  end

  private

  def user_params
    params.require.permit(:user_name, :password)
  end

end
