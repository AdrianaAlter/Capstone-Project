Rails.application.routes.draw do
  root to: "static_pages#root"
  namespace :api do
    resources :users, only: [:index, :new, :create, :show]
    resource :session, only: [:new, :create, :destroy]
    resources :boards, only: [:index, :new, :create, :show, :edit, :update, :destroy]
  end
end
