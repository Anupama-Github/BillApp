class Item < ActiveRecord::Base
has_one :stock
def self.search(search)
  if search
   # where('name LIKE ?', "%#{search}%")
#     where('name LIKE ?', "%#{search}%")
    where("name like ?", "%#{search}%") 
  else
    scoped
  end
end


end
