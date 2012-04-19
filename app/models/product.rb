class Product < ActiveRecord::Base

has_many :items
has_many :stocks
belongs_to :bill




end
