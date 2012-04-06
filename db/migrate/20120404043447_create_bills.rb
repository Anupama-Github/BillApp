class CreateBills < ActiveRecord::Migration
  def change
    create_table :bills do |t|
      t.string :code
      t.text :Particulars
      t.string :mm
      t.string :size
      t.string :length
      t.string :no
      t.string :feet
      t.string :cft
      t.string :sqft
      t.string :rate
      t.string :amt
      t.string :vat
      t.string :vatamt
      t.string :amount
      t.string :balance

      t.timestamps
    end
  end
end
