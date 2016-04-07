class Card < ActiveRecord::Base
  validates :title, presence: true
  validates :list_id, presence: true

  belongs_to(
    :list,
    class_name: "List",
    primary_key: :id,
    foreign_key: :list_id
  )

  has_one(
    :board,
    through: :list,
    source: :board
  )

  def sibling_cards
    cards = Card.all
    from_list = cards.select { |card| card.list_id == self.list_id }
    result = from_list.reject { |card| card.id == self.id }
  end

end
