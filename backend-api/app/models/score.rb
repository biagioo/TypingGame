class Score < ApplicationRecord
    belongs_to :difficulty
    scope :descending, -> { order(number: :desc) }
end
