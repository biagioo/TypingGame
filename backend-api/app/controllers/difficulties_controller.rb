class DifficultiesController < ApplicationController

    def index 
        difficulties = Difficulty.all 
        render json: difficulties 
    end
    
    def show 
        difficulty = Difficulty.find_by(id:params[:id])
        render json: difficulty
    end

    

end
