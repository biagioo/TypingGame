class Score < ApplicationRecord

    scope :descending, -> { order(number: :desc) }
end
