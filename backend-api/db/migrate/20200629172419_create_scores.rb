class CreateScores < ActiveRecord::Migration[6.0]
  def change
    create_table :scores do |t|
      t.string :display_name
      t.integer :number
      t.belongs_to :difficulty, null: false, foreign_key: true
      
      t.timestamps
    end
  end
end
