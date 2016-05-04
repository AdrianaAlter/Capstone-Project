class Notification < ActiveRecord::Base
  validates :note_id, presence: true

  belongs_to(
    :note,
    class_name: 'Note',
    primary_key: :id,
    foreign_key: :note_id
  )

end
