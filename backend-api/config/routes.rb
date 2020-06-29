Rails.application.routes.draw do
  resources :words
  resources :difficulties
  resources :scores
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
end
