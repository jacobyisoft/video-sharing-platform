Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  root to: 'static_pages#root'
  
  namespace :api, defaults: {format: :json} do
    post '/validation', to: 'users#validation'
    get '/search', to: 'videos#search'
    get '/trending', to: 'videos#trending'
    get '/search_users', to: 'users#search'
    get '/liked_videos', to: 'users#liked_videos'
    get '/user_videos/:userId', to: 'users#videos'
    get '/comments/:commentId', to: 'comments#child_comments'
    resources :users, only: [:create, :index, :show]
    resources :videos, only: [:index, :create, :show, :update, :destroy] do
      resources :comments, only: [:index, :create]
    end
    resources :comments, only: [:update, :destroy]
    resources :likes, only: [:create, :destroy, :index]
    resource :session, only: [:create, :destroy]
  end
end
