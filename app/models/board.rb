class Board < ActiveRecord::Base
	include PgSearch

	multisearchable :against => [:title],
                  :using => {
                    :tsearch => {:prefix => true}
                  }

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

	has_many(
		:notes,
		class_name: "Note",
		primary_key: :id,
		foreign_key: :board_id
	)


end
