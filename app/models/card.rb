class Card < ActiveRecord::Base
  validates :title, presence: true
  validates :list_id, presence: true

  belongs_to(
    :list,
    class_name: "List",
    primary_key: :id,
    foreign_key: :list_id
  )


end
