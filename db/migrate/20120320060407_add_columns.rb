class AddColumns < ActiveRecord::Migration
  def change
    add_column :items, :length, :integer
    add_column :items, :breadth, :integer	            
    add_column :items, :customid, :integer
  end
    
end
