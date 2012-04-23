class AddDimensionsToItems < ActiveRecord::Migration
  def change
  add_column :items, :dimensions, :integer
  end
end
