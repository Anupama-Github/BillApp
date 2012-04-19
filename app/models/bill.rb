class Bill < ActiveRecord::Base
  has_many :items
  belongs_to :customer
  has_many :products, :through => :items
  accepts_nested_attributes_for :products, :allow_destroy => true
  accepts_nested_attributes_for :items, :allow_destroy => :true
end
