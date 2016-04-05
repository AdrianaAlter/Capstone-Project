class List < ActiveRecord::Base
	validates :title, :board_id, presence: true

	belongs_to(
		:board,
		class_name: "Board",
		primary_key: :id,
		foreign_key: :board_id
	)


end
