Rails.application.routes.draw do
  
  get '/scores', to: 'scores#high_scores'

  resources :scores, :only => :create 
  
  resources :difficulties, :only => :index do 
    resources :words, :only => :index
  end
  
end
