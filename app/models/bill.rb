class Bill < ActiveRecord::Base
  
  belongs_to :customer
  has_many :items


  accepts_nested_attributes_for :items, :allow_destroy => true

  def customer_name
    customer.name if customer
  end
  
  def customer_name=(name)
    self.customer= Customer.find_or_create_by_name(name) unless name.blank?
  end
  
  def customer_phoneno
    customer.phoneno if customer
  end
  
  def customer_phoneno=(phoneno)
    self.customer= Customer.find_or_create_by_phoneno(phoneno) unless name.blank?
  end

end
