class RemoveColumnsFromItems < ActiveRecord::Migration
  def change
  remove_column :items, :mm, :sqft, :feet, :cft
  end
end
