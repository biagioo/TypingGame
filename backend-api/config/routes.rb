Rails.application.routes.draw do

  resources :difficulties, :only => [:index, :show] do 
    resources :words, :only =>[:index, :show]
    resources :scores, :only =>[:index, :show]
  end
  
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
end
