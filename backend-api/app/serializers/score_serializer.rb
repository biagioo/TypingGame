class ScoreSerializer < ActiveModel::Serializer
  attributes :id, :display_name, :number, :created_at
end
