class User < ActiveRecord::Base

  include PgSearch
  multisearchable :against => [:user_name],
                  :using => {
                    :tsearch => {:prefix => true}
                  }

  validates :user_name, presence: true, uniqueness: true
  validates :session_token, presence: true, uniqueness: true
  validates :password, length: { minimum: 6, allow_nil: true }

  after_initialize :ensure_session_token

  attr_reader :password

  has_many(
    :boards,
    class_name: "Board",
    primary_key: :id,
    foreign_key: :author_id
  )

	has_many(
		:lists,
		through: :boards,
		source: :lists
	)

  def self.find_by_name(user_name, password)
    user = User.find_by(user_name: user_name)
    (user && user.is_password?(password)) ? user : nil
	end

  def self.find_or_create_by_auth_hash(auth_hash)
    provider = auth_hash[:provider]
    uid = auth_hash[:uid]


    user = User.find_by(provider: provider, uid: uid)
    return user if user

    User.create(
    provider: provider,
    uid: uid,
    user_name: auth_hash[:extra][:raw_info][:name]
    )
  end

  def password=(password)
    @password = password
    self.password_digest = BCrypt::Password.create(password)
  end

  def is_password?(password)
    BCrypt::Password.new(self.password_digest).is_password?(password)
  end

  def reset_session_token!
    self.session_token = SecureRandom.urlsafe_base64(16)
    self.save!
    self.session_token
  end


  private

  def ensure_session_token
    self.session_token ||= SecureRandom.urlsafe_base64(16)
  end

end
