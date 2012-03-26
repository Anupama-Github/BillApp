class RenameSubcategoryIdInStocks < ActiveRecord::Migration
  def change
  rename_column :stocks, :subcategory_id, :item_id
  end
end
