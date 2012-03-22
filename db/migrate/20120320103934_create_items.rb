class CreateItems < ActiveRecord::Migration
  def change
    create_table :items do |t|
      t.string :name
      t.integer :item_id
      t.integer :length
      t.integer :breadth
      t.integer :custom_id

      t.timestamps
    end
  end
end
