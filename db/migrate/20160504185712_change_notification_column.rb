class ChangeNotificationColumn < ActiveRecord::Migration
  def change
    rename_column :notifications, :note_id, :board_id
  end
end
