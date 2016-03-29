class Board < ActiveRecord::Base

  validates :title, presence: true
  validates :author_id, presence: true

  belongs_to(
    :author,
    class_name: "User",
    primary_key: :id,
    foreign_key: :author_id
  )

  def self.find_by_author(author_id)
    board = Board.where("author_id = 'author_id'")
    board ? board : nil
  end



end
