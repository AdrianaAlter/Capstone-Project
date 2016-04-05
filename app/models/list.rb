class List < ActiveRecord::Base
	validates :title, :board_id, presence: true

	belongs_to(
		:board,
		class_name: "Board",
		primary_key: :id,
		foreign_key: :board_id
	)

  has_many(
    :cards,
    class_name: "Card",
    primary_key: :id,
    foreign_key: :list_id
  )

end
