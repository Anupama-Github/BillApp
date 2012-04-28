class BillsController < ApplicationController
  autocomplete :bill, :code, :extra_data => [:name, :size]

 
  # GET /bills
  # GET /bills.json
  def index
    @bills = Bill.order("created_at DESC").search(params[:search])

    respond_to do |format|
      format.html # index.html.erb
      format.js
    end
  end

  # GET /bills/1
  # GET /bills/1.json
  def show
    @bill = Bill.find(params[:id])

    respond_to do |format|		
      format.html # show.html.erb
      format.json { render json: @bill }
    end
  end
  
  def showold
  @bill = Bill.find(params[:id])
    
    respond_to do |format|		
      format.html # showold.html.erb
      format.json { render json: @bill }
    end
  end


  # GET /bills/new
  # GET /bills/new.json
  def new
    @bill = Bill.new
    @bill.items.build
#    3.times { @bill.items.build }
    respond_to do |format|
      format.html # new.html.erb
      format.json { render json: @bill }
    end
  end

  # GET /bills/1/edit
  def edit
    @bill = Bill.find(params[:id])
  end

  # POST /bills
  # POST /bills.json
  def create
    @bill = Bill.new(params[:bill])
   #@bill = Bill.new(params[:id])
   # @bill.items.build
    #3.times { @bill.items.build }
     #@bill.items.build
     @bill.created_at = Time.now 

    respond_to do |format|
      if @bill.save
        format.html { redirect_to new_bill_path, notice: 'Bill was successfully created.' }
        #format.json { render json: '/bills/new', status: :created, location: @bill }
        #format.html  #index.html.erb
        #format.json { render json: @bill }

      else
        format.html { render action: "new" }
        format.json { render json: @bill.errors, status: :unprocessable_entity }
      end
    end
  end

  # PUT /bills/1
  # PUT /bills/1.json
  def update
    @bill = Bill.find(params[:id])

    respond_to do |format|
      if @bill.update_attributes(params[:bill])
        format.html { redirect_to @bill, notice: 'Bill was successfully updated.' }
        format.json { head :no_content }
      else
        format.html { render action: "edit" }
        format.json { render json: @bill.errors, status: :unprocessable_entity }
      end
    end
  end

  # DELETE /bills/1
  # DELETE /bills/1.json
  def destroy
    @bill = Bill.find(params[:id])
    @bill.destroy

    respond_to do |format|
      format.html { redirect_to bills_url }
      format.json { head :no_content }
    end
  end

  

end
