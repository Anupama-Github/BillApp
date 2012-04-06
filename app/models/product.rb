class Product < ActiveRecord::Base

has_many :items, :inverse_of => :product
has_many :stocks

end
