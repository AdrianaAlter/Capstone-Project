class Board < ActiveRecord::Base
	include PgSearch
	multisearchable :against => [:title]
  validates :title, presence: true
  validates :author_id, presence: true

  belongs_to(
    :author,
    class_name: "User",
    primary_key: :id,
    foreign_key: :author_id
  )

	has_many(
		:lists,
		class_name: "List",
		primary_key: :id,
		foreign_key: :board_id
	)

  has_many(
    :cards,
    through: :lists,
    source: :cards
  )


end
