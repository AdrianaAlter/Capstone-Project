class CreateNotes < ActiveRecord::Migration
  def change
    create_table :notes do |t|
      t.text :content, null: false;
      t.integer :board_id, null: false;
      t.integer :noter_id, null: false;
      t.timestamps
    end
  end
end
