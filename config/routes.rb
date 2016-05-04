Rails.application.routes.draw do
  # get '*unmatched_route', to: 'static_pages#root'
  root to: "static_pages#root"
  namespace :api, defaults: {format: :json} do
		resources :searches, only: [:index]
    resource :session, only: [:create, :destroy, :show]
    resources :users, only: [:index, :new, :create, :show]
    resources :boards, only: [:index, :new, :create, :show, :edit, :update, :destroy] do
		    resources :lists, only: [:index, :new, :create, :show, :destroy, :update]
        resources :cards, only: [:index, :new, :create, :show, :destroy, :update]
        resources :notes, only: [:index, :create, :destroy]
        resources :notifications, only: [:index, :create, :destroy]
    end
	end
   get "auth/facebook/callback", to: "omniauth#facebook"
  #  get "*any", via: :all, to: "errors#not_found"
end
