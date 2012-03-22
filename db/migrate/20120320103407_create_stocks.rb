class CreateStocks < ActiveRecord::Migration
  def change
    create_table :stocks do |t|
      t.integer :subcategory_id
      t.integer :quantity
      t.decimal :rate

      t.timestamps
    end
  end
end
