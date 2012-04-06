class Item < ActiveRecord::Base
belongs_to :bill
belongs_to :product, :inverse_of => :items

end
