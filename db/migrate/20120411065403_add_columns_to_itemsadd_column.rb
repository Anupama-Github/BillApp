class AddColumnsToItemsaddColumn < ActiveRecord::Migration
  def change


    add_column :items, :mm, :string

    add_column :items, :size, :string

    add_column :items, :length, :string

    add_column :items, :no, :string

    add_column :items, :feet, :string

    add_column :items, :cft, :string

    add_column :items, :sqft, :string

  end
end
