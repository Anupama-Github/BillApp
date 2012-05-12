$(document).ready(function() {
  $("input#product_name").change(function() {
//    alert($(this).val());
 //   alert("testing");
//    $("span#metric").text()
  });  
//   $('.colors').extremes({
// diameter: 50
// });

  $('div.items_input_fields input').live('keyup', function() {
//	alert("keypress");
	$('input#bill_amount').val($('input.item_amount').sumValues());
  });

  
  
  $(window).keypress(function(event) {
    if (!(event.which == 115 && event.ctrlKey) && !(event.which == 19)) return true;
    $('#new_bill').submit();
    event.preventDefault();
    return false;
});

  


 /* $('div.items_input_fields input.item_rate').live('keyup',function() {
       var $rate = parseInt($(this).val(), 10);
       alert($rate);
       //var $length_id = $(this).data("length-id");
       //var $amount_id = $(this).data("amount-id");
       //var $length = parseInt($("#"+$length_id).val(), 10);
         var $length = parseInt(document.getElementById("length-id"));
       alert($length);
       $("#"+$amount_id).val($rate*$length);
       var $metric_id = $(this).data("metric-id");
       var $metric = parseInt($("#"+$metric_id).val(), 10);
        //alert($metric);
        switch($metric)
         {
          case 0 :alert("cft");
                   break;
          case 1 :alert("feet");
		     break;	
          case 2 :alert("mm");
                   break;
	   case 3 :alert("sqft");
                   break;
         }*/

 // });

      $('div.items_input_fields input.item_rate').live('keypress',function() {
       var $rate = parseInt($(this).val(), 10);
       var inp = $('div.items_input_fields input');

       var $index = inp.index($(this));
	
       var $prev = $(this).prev().val();
	//var $prev = inp.index($(this).prev());
       //alert($index);
       //alert($next);
       //alert($prev);
      //alert( $('div.items_input_fields input.sold_qty').eq($('div.items_input_fields input.sold_qty').index('div.items_input_fields input.sold_qty')).val());
       var $length_id = $(this).data("length-id");
       var $amount_id = $(this).data("amount-id");
       var $length = parseInt($("#"+$length_id).val(), 10);
         //var $length = parseInt(document.getElementById("length-id"));
       //alert($length);
       // $("#"+$amount_id).val($rate*$length);
//       var $metric_id = $(this).data("metric-id");
       // var $metric = parseInt($("#"+$metric_id).val(), 10);
        //alert($metric);
        if(isNaN($rate*$length)) {
         $("#"+$amount_id).val(0);
        }else{
         $("#"+$amount_id).val($rate*$length);
        }

        
 });

  $('div.items_input_fields input.item_length').live('keypress',function() {
       //alert("in length");
       var $length = parseInt($(this).val(), 10);
        
      // var $rate_id = $(this).data("rate-id");
  //      alert($rate_id.val());
//        alert("#"+$rate_id.val());
       //alert($rate_id);
       var $amount_id = $(this).data("amount-id");
      // var $rate = parseInt($("#"+$rate_id).val(), 10);
         var $rate = $(this).prev().val();
        // alert($rate);
        // alert($rate);
//       if(isNaN($rate*$length)) {
// 	  $('input#bill_amount').val(0);
//       }else{
// 	  $('input#bill_amount').val($rate*$length);
//       }
        if(isNaN($rate*$length)) {
         $("#"+$amount_id).val(0);
        }else{
         $("#"+$amount_id).val($rate*$length);
        }
       // $("#"+$amount_id).val($rate*$length);
       
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
            
      $('input#bill_amount').val($('div.items_input_fields input.item_amount').sumValues());
  //    alert("hi");
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
$.fn.sumValues = function() {
//	alert("keypress");
	var sum = 0; 
	this.each(function() {
		if ( $(this).is(':input') ) {
                  	//alert($(this).val());
			var val = $(this).val();
		} else {
			var val = $(this).text();
		}
		sum += parseFloat( ('0' + val).replace(/[^0-9-\.]/g, ''), 10 );
	});
	return sum;
};

$("input.item_no").live("keypress", function(e){
               var rand=Math.floor((Math.random()*100000)+1).toString();
                if (e.which == 43 ||e.keyCode == 43 ) 
                {   //alert(e);
                    //$('div #add_item').trigger('click');
                    add_fields(this, "items", "\n  <div class=\"items_input_fields\" >\n    <input class=\"input-small\" data-autocomplete=\"/products/autocomplete_product_code\" data-update-elements=\"{&quot;name&quot;:&quot;#product_name&quot;,&quot;size&quot;:&quot;#product_size&quot;,&quot;category&quot;:&quot;#product_metric"+rand+"&quot;}\" id=\"bill_items_attributes_new_items_product_code\" name=\"bill[items_attributes][new_items][product_code]\" placeholder=\"Type code here\" size=\"30\" type=\"text\" /> \n\n <input class=\"input-small item_product_name\" id=\"product_name\" name=\"product_name\" size=\"30\" type=\"text\" placeholder=\"Product Name\" readonly=\"readonly\" \/>\n\n <input class=\"input-small item_product_size\" id=\"product_size\" name=\"product_size\" size=\"30\" type=\"text\" placeholder=\"Product Size\" readonly=\"readonly\" \/>\n\n <input class=\"input-small \" id=\"sold_qty\"  name=\"bill[items_attributes][new_items][sold_qty]\" size=\"30\" type=\"text\" placeholder=\"Sold Quantity\" \/> <input class=\"input-small item_rate\" id=\"item_rate"+rand+" \" size=\"30\" type=\"text\" placeholder=\"Rate\" data-metric-id=\"product_metric"+rand+"\" data-length-id=\"item_length"+rand+"\" data-amount-id=\"item_amount"+rand+"\" name=\"bill[items_attributes][new_items][rate]\"\/> \n      \n<input class=\"input-small item_length\" id=\"item_length"+rand+" \"name=\"bill[items_attributes][new_items][length]\" size=\"30\" type=\"text\" placeholder=\"Length\" data-metric-id=\"product_metric"+rand+"\" data-rate-id=\"item_rate"+rand+"\" data-amount-id=\"item_amount"+rand+"\" name=\"bill[items_attributes][new_items][length]\"  \/> \n      \n    <input class=\"input-small item_no\" id=\"item_no\" name=\"bill[items_attributes][new_items][no]\" placeholder=\"No\" size=\"30\" type=\"text\" /> \n        \n    <input class=\"input-small item_amount\" id=\"item_amount"+rand+"\" name=\"total_amount\" placeholder=\"Total Amount\" type=\"text\" /> \n    \n    <input class=\"input-small\" id=\"product_metric"+rand+"\" name=\"metric\" type=\"hidden\" />\n\n    <span id=\"metric\"><\/span>\n  <\/div>\n\n"); return false;}
            });



});
$('.datatable').dataTable({
  "sDom": "<'row'<'span6'l><'span6'f>r>t<'row'<'span6'i><'span6'p>>",
  "sPaginationType": "bootstrap"
});



	
       
