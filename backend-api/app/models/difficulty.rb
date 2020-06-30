class Difficulty < ApplicationRecord
    has_many :words
    has_many :scores
end
