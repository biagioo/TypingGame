class ScoresController < ApplicationController
    before_action :find_difficulty

    def index 
        # scores = @difficulty.scores.descending
        scores = Score.all
        render json: scores
    end

    private 

    def find_difficulty 
        @difficulty = Difficulty.find_by(id:params[:difficulty_id])
    end

end
