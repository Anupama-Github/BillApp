class RenameRateToAdvanceInBills < ActiveRecord::Migration
  def change
  rename_column(:bills,:rate,:advance)
  end
end
