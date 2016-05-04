class Note < ActiveRecord::Base

  validates :content, :board_id, :noter_id, presence: true

  belongs_to(
    :board,
    class_name: 'Board',
    primary_key: :id,
    foreign_key: :board_id
  )

  belongs_to(
    :noter,
    class_name: 'User',
    primary_key: :id,
    foreign_key: :noter_id
  )

  has_many(
    :notifications,
    class_name: 'Notification',
    primary_key: :id,
    foreign_key: :note_id
  )
  
  def noted_on
    User.all.select { |user| note.board.author == user }
  end

end
