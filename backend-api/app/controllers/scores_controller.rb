class ScoresController < ApplicationController
    before_action :find_difficulty

    def index 
        scores = @difficulty.scores.descending
        render json: scores
    end

    def show
        score = @difficulty.scores.find_by(id:params[:id])
        render json: score
    end


    private 

    def find_difficulty 
        @difficulty = Difficulty.find_by(id:params[:difficulty_id])
    end

end
