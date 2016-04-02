User.destroy_all

user1 = User.create!(user_name: "#{Faker::Name.name}", password: "#{Faker::Internet.password(6)}", email:"#{Faker::Internet.email}")
# user2 = User.create(user_name: "#{Faker::Name.name}", password: "#{Faker::Internet.password(6)}", email:"#{Faker::Internet.email}")
# user3 = User.create(user_name: "#{Faker::Name.name}", password: "#{Faker::Internet.password(6)}", email:"#{Faker::Internet.email}")
# user4 = User.create(user_name: "#{Faker::Name.name}", password: "#{Faker::Internet.password(6)}", email:"#{Faker::Internet.email}")
user5 = User.create(user_name: "Sennacy the Great", password: "sennacy", email: "sennacy@cat.com")


Board.destroy_all

board1 = Board.create(author_id: user1.id, title: "#{Faker::Hacker.noun}", description: "#{Faker::Hacker.say_something_smart}")
board2 = Board.create(author_id: user1.id, title: "#{Faker::Hacker.noun}", description: "#{Faker::Hacker.say_something_smart}")
board3 = Board.create(author_id: user1.id, title: "#{Faker::Hacker.noun}", description: "#{Faker::Hacker.say_something_smart}")

board13 = Board.create(author_id: user5.id, title: "Meow", description: "meow meow meow")
board14 = Board.create(author_id: user5.id, title: "Still meowing", description: "meow meow meow")
board15 = Board.create(author_id: user5.id, title: "Continuing to meow", description: "meow meow meow")

List.destroy_all

list1 = List.create(title: "Chasing mice", board_id: user5.boards.first.id)

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
