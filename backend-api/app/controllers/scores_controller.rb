class ScoresController < ApplicationController

    def index
        scores = Score.all.descending
        render json: scores
    end


end
