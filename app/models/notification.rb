class Notification < ActiveRecord::Base
  validates :board_id, :user_id, :author_id, presence: true

  belongs_to(
    :board,
    class_name: 'Board',
    primary_key: :id,
    foreign_key: :board_id
  )

  belongs_to(
    :author,
    class_name: 'User',
    primary_key: :id,
    foreign_key: :author_id
  )

end
