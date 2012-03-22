class DropSubcategories < ActiveRecord::Migration
  def change 
  drop_table :subcategories
  
  end
end
