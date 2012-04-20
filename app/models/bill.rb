class Bill < ActiveRecord::Base
  
  belongs_to :customer
  has_many :items


  accepts_nested_attributes_for :items, :allow_destroy => true
end
