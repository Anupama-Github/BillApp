class ChangeVatInBill < ActiveRecord::Migration
  def change
  change_column :bill, :vat, :default => "0"

  end
end
