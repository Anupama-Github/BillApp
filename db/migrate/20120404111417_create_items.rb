class CreateItems < ActiveRecord::Migration
  def change
    create_table :items do |t|
      t.integer :bill_id
      t.integer :product_id
      t.string :sold_qty
      t.string :rate

      t.timestamps
    end
  end
end
