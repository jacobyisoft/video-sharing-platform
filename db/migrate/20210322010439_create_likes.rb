class CreateLikes < ActiveRecord::Migration[5.2]
  def change
    create_table :likes do |t|
      t.string :likeable_type, null: false
      t.integer :likeable_id, null: false
      t.integer :user_id, null: false

      t.timestamps
    end
    add_index :likes, [:likeable_id, :likeable_type]
    add_index :likes, [:likeable_id, :likeable_type, :user_id], unique: true
  end
end
