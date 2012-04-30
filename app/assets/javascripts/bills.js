$.fn.sumValues = function() {
	alert("keypress");
	var sum = 0; 
	this.each(function() {
		if ( $(this).is(':input') ) {
                  	alert($(this).val());
			var val = $(this).val();
		} else {
			var val = $(this).text();
		}
		sum += parseFloat( ('0' + val).replace(/[^0-9-\.]/g, ''), 10 );
	});
	return sum;
};

$(document).ready(function() {
  $("input#product_name").change(function() {
//    alert($(this).val());
    alert("testing");
//    $("span#metric").text()
  });  
  $('.colors').extremes({
diameter: 50
});

  $('div.items_input_fields input').live('change', function() {
//	alert("keypress");
	$('input#bill_amount').val($('input.item_amount').sumValues());
  });
  $('div.items_input_fields input.item_rate').live('keyup',function() {
       var $rate = parseInt($(this).val(), 10);
       var $length_id = $(this).data("length-id");
       var $amount_id = $(this).data("amount-id");
       var $length = parseInt($("#"+$length_id).val(), 10);
       $("#"+$amount_id).val($rate*$length);

  });

  $('div.items_input_fields input.item_length').live('keyup',function() {
       var $length = parseInt($(this).val(), 10);
       var $rate_id = $(this).data("rate-id");
       var $amount_id = $(this).data("amount-id");
       var $rate = parseInt($("#"+$rate_id).val(), 10);
//       if(isNaN($rate*$length)) {
// 	  $('input#bill_amount').val(0);
//       }else{
// 	  $('input#bill_amount').val($rate*$length);
//       }

       $("#"+$amount_id).val($rate*$length);
  });


  $('input#bill_advance').live('keyup', function() {
//     $('input#bill_amount').val($('input.item_amount').sumValues());
//	alert("keypress");
       var $advance = parseInt($('input#bill_advance').val(), 10);
//	alert($advance);
       var $amount = parseInt($('input#bill_amount').val(), 10);
//	alert($amount);
	if(isNaN($amount - $advance)) {
 	  $('input#bill_balance').val(0);
       }else{
 	  $('input#bill_balance').val($amount - $advance);
       }
//$('input#bill_balance').val($amount - $advance);
  });

  $('input#bill_vat').live('keyup', function() {
            
      $('input#bill_amount').val($('input.item_amount').sumValues());
      alert("hi");
      var $bill_amount = parseInt($('input#bill_amount').val(), 10);
      alert($bill_amount);
      var $bill_vat = parseInt($('input#bill_vat').val(), 10);
      var $vat_amount = parseInt($bill_amount * $bill_vat / 100, 10);
//      alert($vat_amount);
      var $int_vamount = parseInt($vat_amount, 10);
//      alert($int_vamount);
      if(isNaN($int_vamount + $bill_amount)) {
 	 $('input#bill_amount').val($bill_amount);
      }else{
	 $('input#bill_amount').val($int_vamount + $bill_amount);
      }

  });
});


	
       
