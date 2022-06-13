Rails.application.routes.draw do
  namespace :messages do
    resources :searches, only: :index, defaultes: { format: :json }
  end
  resources :messages
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
end
