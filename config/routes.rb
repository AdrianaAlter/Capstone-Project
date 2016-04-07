Rails.application.routes.draw do
  root to: "static_pages#root"
  namespace :api, defaults: {format: :json} do
		resources :searches, only: [:index]
    resource :session, only: [:create, :destroy, :show]
    resources :users, only: [:index, :new, :create, :show]
    resources :boards, only: [:index, :new, :create, :show, :edit, :update, :destroy] do
		    resources :lists, only: [:index, :new, :create, :show, :destroy, :update] do
          resources :cards, only: [:index, :new, :create, :show, :destroy, :update]
        end
    end
	end
   get "auth/facebook/callback", to: "omniauth#facebook"
   get "*any", via: :all, to: "errors#not_found"
end
