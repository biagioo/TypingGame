class ScoresController < ApplicationController

    
    def high_scores
        hardDiff = Difficulty.find_by(id: 3).scores.descending[0..2]
        medDiff = Difficulty.find_by(id: 2).scores.descending[0..2]
        easyDiff = Difficulty.find_by(id: 1).scores.descending[0..2]
        topScores = []
        topScores.push(hardDiff).push(medDiff).push(easyDiff).flatten!
        render json: topScores
    end

    def create 
        difficulty = Difficulty.find_by(id: score_params[:difficulty_id])
        new_score = difficulty.scores.new(score_params)
        if new_score.save 
            render json:{message: true} 
        else
            render json:{message: false}
        end

    end
# end point showing all scores 
    private

    def score_params
        params.require(:score).permit(:display_name, :difficulty_id, :number)
    end

end
