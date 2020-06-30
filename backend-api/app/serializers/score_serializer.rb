class ScoreSerializer < ActiveModel::Serializer
  attributes :id, :display_name, :number, :difficulty_id, :created_at
  belongs_to :difficulty
end
