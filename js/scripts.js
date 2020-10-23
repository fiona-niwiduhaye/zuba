

  




$(document).ready(function(){
    $("form#form1").submit(function(event){
      // event.preventDefault();
    var name = $("input#name").val();
    var email = $("input#email").val();
    var message = $("input#message").val();
  
    if($("input#name").val() && $("input#email").val()){
        
        alert ("Hello "+ name + ",  Thank you for reaching out to ZUBA Wedding Decor .");
    
      }
      
  });
  
  });
  