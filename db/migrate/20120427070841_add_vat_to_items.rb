class AddVatToItems < ActiveRecord::Migration
  def change
  add_column :items, :vat, :integer
  end
end
