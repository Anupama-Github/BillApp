$(document).ready(function() {
  $("#products_search_box").keyup(function() {
    $.get($("#products_search_form").attr("action"), $("#products_search_form").serialize(), null, "script");
    return false;
  });
 
});


/*$('#bill_balance').keypress(function(event){
 
	var keycode = (event.keyCode ? event.keyCode : event.which);
	if(keycode == '13'){
		$('#new_bill').submit();
  	}
	event.stopPropagation();

});
*/





