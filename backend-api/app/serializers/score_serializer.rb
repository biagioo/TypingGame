class ScoreSerializer < ActiveModel::Serializer
  attributes :id, :display_name, :number, :difficulty_id, :difficulty_level
  # belongs_to :difficulty

  def difficulty_level 
    self.object.difficulty.level
  end
end
