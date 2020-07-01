class ScoresController < ApplicationController

    # change to high scores
    def index 
        # scores = @difficulty.scores.descending
        hardDiff = Difficulty.find_by(id: 3).scores.descending[0..1]
        medDiff = Difficulty.find_by(id: 2).scores.descending[0..1]
        easyDiff = Difficulty.find_by(id: 1).scores.descending[0..1]
        topScores = []
        topScores.push(hardDiff).push(medDiff).push(easyDiff).flatten!
        # byebug
        render json: topScores
    end

end
