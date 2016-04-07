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

  def sibling_lists
    lists = List.all
    from_board = lists.select { |list| list.board_id == self.board_id }
    result = from_board.reject { |list| list.id == self.id }
  end

end
