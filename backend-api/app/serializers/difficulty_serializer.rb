class DifficultySerializer < ActiveModel::Serializer
  attributes :id, :level
  # has_many :words
end
