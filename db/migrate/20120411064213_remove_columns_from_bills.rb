class RemoveColumnsFromBills < ActiveRecord::Migration
  def change

        remove_column :bills, :sqft
        remove_column :bills, :cft
        remove_column :bills, :feet
        remove_column :bills, :no
        remove_column :bills, :length
        remove_column :bills, :size
        remove_column :bills, :mm
    end

 end
