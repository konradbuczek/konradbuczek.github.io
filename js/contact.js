$(function() {  
  $('.error').hide();  
  $(".button").click(function() {  


var dataString = 'name='+ name + '&email=' + email;  
//alert (dataString);return false;  
$.ajax({
  type: "POST",  
  url: "bin/process.php",  
  data: dataString,  
  success: function() {  
    $('#contactForm').html("<div id='message'></div>");  
    $('#message').html("<h2>Contact Form Submitted!</h2>")  
    .append("<p>We will be in touch soon.</p>")  
    .hide()  
    .fadeIn(1500, function() {  
      $('#message').append("<img id='checkmark' src='images/check.png' />");  
    });  
  }  
});  
return false; 


 
      
    $('.error').hide();  
      var name = $("input#username").val();  
        if (name == "") {  
      $("label#name_error").show();  
      $("input#name").focus();  
      return false;  
    }  
        var email = $("input#useremail").val();  
        if (email == "") {  
      $("label#email_error").show();  
      $("input#email").focus();  
      return false;  
    }   
     
  });  
});


