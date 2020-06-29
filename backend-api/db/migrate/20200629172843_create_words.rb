class CreateWords < ActiveRecord::Migration[6.0]
  def change
    create_table :words do |t|
      t.string :element
      t.belongs_to :difficulty, null: false, foreign_key: true

      t.timestamps
    end
  end
end
