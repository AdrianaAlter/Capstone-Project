User.destroy_all

user1 = User.create(user_name: 'User One', password: "userone", email: "userone@email.com")
user2 = User.create(user_name: 'User Two', password: "usertwo", email: "usertwo@email.com")

Board.destroy_all

board1 = Board.create(author_id: user1.id, title: "Board One", description: "Description One")
