class CreateCustomers < ActiveRecord::Migration
  def change
    create_table :customers do |t|
      t.string :name
      t.text :address
      t.string :phoneno
      t.string :email

      t.timestamps
    end
  end
end
