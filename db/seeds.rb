User.destroy_all

# user1 = User.create!(user_name: "#{Faker::Name.name}", password: "#{Faker::Internet.password(6)}", email:"#{Faker::Internet.email}")
# user2 = User.create(user_name: "#{Faker::Name.name}", password: "#{Faker::Internet.password(6)}", email:"#{Faker::Internet.email}")
# user3 = User.create(user_name: "#{Faker::Name.name}", password: "#{Faker::Internet.password(6)}", email:"#{Faker::Internet.email}")
# user4 = User.create(user_name: "#{Faker::Name.name}", password: "#{Faker::Internet.password(6)}", email:"#{Faker::Internet.email}")
user5 = User.create!(user_name: "Sennacy the Great", password: "sennacy", email: "sennacy@cat.com")
user6 = User.create!(user_name: "Mr. Cat", password: "mrcat!")
user7 = User.create!(user_name: "Ineffective Mouser", password: "mouser")
user8 = User.create!(user_name: "Unsubtle Impostor", password: "impostor")

Board.destroy_all

# board1 = Board.create!(author_id: user1.id, title: "#{Faker::Hacker.noun}", description: "#{Faker::Hacker.say_something_smart}")
# board2 = Board.create!(author_id: user1.id, title: "#{Faker::Hacker.noun}", description: "#{Faker::Hacker.say_something_smart}")
# board3 = Board.create!(author_id: user1.id, title: "#{Faker::Hacker.noun}", description: "#{Faker::Hacker.say_something_smart}")

intro_board = Board.create(author_id: user5.id, title: "Welcome to CatTrello!  Click on this board to get started.")
board13 = Board.create!(author_id: user5.id, title: "Meow")
board14 = Board.create!(author_id: user5.id, title: "Still meowing")
board15 = Board.create!(author_id: user5.id, title: "Continuing to meow")
board16 = Board.create!(author_id: user5.id, title: "Woof?")

List.destroy_all

intro_list_1 = List.create!(title: "This is a list.  You can make a list to represent each stage of your project.", board_id: intro_board.id)
intro_list_2 = List.create!(title: "To view other users' profiles or public boards, type their user names into the search bar in the header.", board_id: intro_board.id)
intro_list_3 = List.create!(title: "To toggle the privacy status of your board, click on the icon under the board title, or open the form to edit the board.", board_id: intro_board.id)
list1 = List.create!(title: "Chase mice", board_id: board13.id)
list2 = List.create!(title: "Shred the upholstery", board_id: board14.id)
list3 = List.create!(title: "Purrrrrrr", board_id: board15.id)
list4 = List.create!(title: "Learn a foreign language (e.g. Dog)", board_id: board16.id)

Card.destroy_all

introCard1 = Card.create!(title: "Create a card for each individual task related to your list.", list_id: intro_list_1.id)
introCard2 = Card.create!(title: "Click the icons on the right to edit or delete a card.", list_id: intro_list_1.id)
introCard3 = Card.create!(title: "Once you have navigated to another user's public board, you can leave a note.", list_id: intro_list_2.id)
# introCard4 = Card.create!(title: "If someone has left you a note, you will receive a notification, in the top right corner of the header.", list_id: intro_list_2.id)
card1 = Card.create!(title: "Stalk...", list_id: list1.id)
card2 = Card.create!(title: "...ambush...", list_id: list1.id)
card3 = Card.create!(title: "...POUNCE!", list_id: list1.id)
card4 = Card.create!(title: "Hone claws on scratching post (e.g. nearest human's leg)", list_id: list2.id)

Note.destroy_all

note1 = Note.create(content: "Hello!", board_id: board13.id, noter_id: user6.id)
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
