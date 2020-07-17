Rails.application.routes.draw do
  
  get '/highscores', to: 'scores#high_scores'

  resources :scores, :only => [:create, :index] 
  
  resources :difficulties, :only => :index do 
    resources :words, :only => :index
  end
  
end
