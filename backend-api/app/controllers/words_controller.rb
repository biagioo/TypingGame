class WordsController < ApplicationController
    def index 
        words = Word.all 
        render json: words
    end

    def show
        words = Word.find_by(difficulty_id: params[:id])
        render json: words
    end

    private 


end
