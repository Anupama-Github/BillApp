class CreateStocks < ActiveRecord::Migration
  def change
    create_table :stocks do |t|
      t.integer :product_id
      t.decimal :quantity

      t.timestamps
    end
  end
end
