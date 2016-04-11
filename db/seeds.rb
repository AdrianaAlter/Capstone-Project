User.destroy_all

user1 = User.create!(user_name: "#{Faker::Name.name}", password: "#{Faker::Internet.password(6)}", email:"#{Faker::Internet.email}")
# user2 = User.create(user_name: "#{Faker::Name.name}", password: "#{Faker::Internet.password(6)}", email:"#{Faker::Internet.email}")
# user3 = User.create(user_name: "#{Faker::Name.name}", password: "#{Faker::Internet.password(6)}", email:"#{Faker::Internet.email}")
# user4 = User.create(user_name: "#{Faker::Name.name}", password: "#{Faker::Internet.password(6)}", email:"#{Faker::Internet.email}")
user5 = User.create!(user_name: "Sennacy the Great", password: "sennacy", email: "sennacy@cat.com")
user6 = User.create!(user_name: "Guest Cat", password: "guestcat")

Board.destroy_all

board1 = Board.create!(author_id: user1.id, title: "#{Faker::Hacker.noun}", description: "#{Faker::Hacker.say_something_smart}")
board2 = Board.create!(author_id: user1.id, title: "#{Faker::Hacker.noun}", description: "#{Faker::Hacker.say_something_smart}")
board3 = Board.create!(author_id: user1.id, title: "#{Faker::Hacker.noun}", description: "#{Faker::Hacker.say_something_smart}")

board13 = Board.create!(author_id: user5.id, title: "Meow")
board14 = Board.create!(author_id: user5.id, title: "Still meowing")
board15 = Board.create!(author_id: user5.id, title: "Continuing to meow")
board16 = Board.create!(author_id: user5.id, title: "Woof?")

List.destroy_all

list1 = List.create!(title: "Chase mice", board_id: board13.id)
list2 = List.create!(title: "Shred the upholstery", board_id: board14.id)
list3 = List.create!(title: "Purrrrrrr", board_id: board15.id)
list4 = List.create!(title: "Learn a foreign language (e.g. Dog)", board_id: board16.id)

Card.destroy_all

card1 = Card.create(title: "Stalk...", list_id: list1.id)
card2 = Card.create(title: "...ambush...", list_id: list1.id)
card3 = Card.create(title: "...POUNCE!", list_id: list1.id)
card4 = Card.create(title: "Hone claws on scratching post (e.g. nearest human's leg)", list_id: list2.id)


# board4 = Board.create(author_id: user2.id, title: "#{Faker::Hacker.noun}", description: "#{Faker::Hacker.say_something_smart}")
# board5 = Board.create(author_id: user2.id, title: "#{Faker::Hacker.noun}", description: "#{Faker::Hacker.say_something_smart}")
# board6 = Board.create(author_id: user2.id, title: "#{Faker::Hacker.noun}", description: "#{Faker::Hacker.say_something_smart}")
#
# board7 = Board.create(author_id: user3.id, title: "#{Faker::Hacker.noun}", description: "#{Faker::Hacker.say_something_smart}")
# board8 = Board.create(author_id: user3.id, title: "#{Faker::Hacker.noun}", description: "#{Faker::Hacker.say_something_smart}")
# board9 = Board.create(author_id: user3.id, title: "#{Faker::Hacker.noun}", description: "#{Faker::Hacker.say_something_smart}")
#
# board10 = Board.create(author_id: user4.id, title: "#{Faker::Hacker.noun}", description: "#{Faker::Hacker.say_something_smart}")
# board11 = Board.create(author_id: user4.id, title: "#{Faker::Hacker.noun}", description: "#{Faker::Hacker.say_something_smart}")
# board12 = Board.create(author_id: user4.id, title: "#{Faker::Hacker.noun}", description: "#{Faker::Hacker.say_something_smart}")
