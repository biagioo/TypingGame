class WordsController < ApplicationController
    before_action :find_difficulty
    
    def index 
        words = @difficulty.words.shuffle
        render json: words
    end

    private 

    def find_difficulty 
        @difficulty = Difficulty.find_by(id:params[:difficulty_id])
    end


end
