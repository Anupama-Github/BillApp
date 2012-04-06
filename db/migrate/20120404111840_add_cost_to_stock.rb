class AddCostToStock < ActiveRecord::Migration
  def change
    add_column :stocks, :cost, :string

  end
end
