class Product < ActiveRecord::Base

has_many :items
has_many :stocks
validates :code,:name,:size,:category, :presence => true
validates :code, :uniqueness => true
 def self.search(search)
  if search
    find(:all, :conditions => ['name LIKE ? OR code LIKE ? OR size LIKE ?', ["%#{search}%"]*3].flatten)
  else
    find(:all)
  end
 end 


end
