class AddPrivacy < ActiveRecord::Migration
  def change
    add_column :boards, :private, :boolean, default: true
  end
end
