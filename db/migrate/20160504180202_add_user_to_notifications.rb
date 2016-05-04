class AddUserToNotifications < ActiveRecord::Migration
  def change
    add_column :notifications, :user_id, :integer, null: false
  end
end
