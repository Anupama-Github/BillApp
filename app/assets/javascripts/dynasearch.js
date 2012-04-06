$(document).ready(function() {
  $("#items th a").live("click", function() {
   $.getScript(this.href);
    return false;
  });

  $("#search").keyup(function() {
   $.get($("#items_search").attr("action"), $("#items_search").serialize(),null, "script");
   return false;
   });
});

