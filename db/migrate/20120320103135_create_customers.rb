class CreateCustomers < ActiveRecord::Migration
  def change
    create_table :customers do |t|
      t.string :name
      t.text :address
      t.integer :phone_no
      t.string :email_id
      t.string :CompanyName

      t.timestamps
    end
  end
end
