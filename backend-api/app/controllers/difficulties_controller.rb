class DifficultiesController < ApplicationController

    def index 
        difficulties = Difficulty.all 
        render json: difficulties 
    end

end
