class ScoreSerializer < ActiveModel::Serializer
  attributes :id, :display_name, :number, :difficulty_id
  # belongs_to :difficulty
end
