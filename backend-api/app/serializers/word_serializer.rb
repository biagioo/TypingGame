class WordSerializer < ActiveModel::Serializer
  attributes :id, :element, :difficulty_id
  belongs_to :difficulty
end
