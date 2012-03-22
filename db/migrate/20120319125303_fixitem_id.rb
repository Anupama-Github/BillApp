class FixitemId < ActiveRecord::Migration
  def change
    rename_column :subcategories, :item_id, :ItemId
  end

end
