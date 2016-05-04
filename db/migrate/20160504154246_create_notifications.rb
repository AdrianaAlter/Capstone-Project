class CreateNotifications < ActiveRecord::Migration
  def change
    create_table :notifications do |t|
      t.integer :note_id, null: false
      t.timestamps null: false
    end
  end
end
