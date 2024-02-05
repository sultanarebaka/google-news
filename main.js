(document).ready(function () {
  
    ("#signup_form").submit(function (e) {
      e.preventDefault();    
  
      var name = ("#name").val();
      var email = ("#email").val();
      var password = ("#password").val();
      
      (".error").remove();
      
      // Check the name length, return an error if field is empty.
      if (name.length < 1) {
        ("#name").after(
          '<span class="error">Name is required</span>'
        );
        return;
      }
      
      // Check the email length, return an error if the field is empty.
      // Also run a regex against the email to verify the value is an email.
      if (email.length < 1) {
        ("#email").after('<span class="error">Email is required</span>');
        return;
      } else {
        var regEx = /^([a-zA-Z0-9_\.\-\+])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+/;
        var validEmail = regEx.test(email);
        if (!validEmail) {
          ("#email").after('<span class="error">Enter a valid email</span>');
          return;
        }
      }
      
      // Check the length of the password value, if empty return an error. 
      if (password.length < 8) {
        ("#password").after(
          '<span class="error">Password must be at least 8 characters long</span>'
        );
        return;
      }
      
      // If form has been filled send the data to a server.
      // In this case we create an alert message
      alert(
        "Name : " +
        name +
        "\n" +
        "Email : " +
        email +
        "\n" +
        "DO SOMETHING WITH THE INFORMATION"
      );
    });
  });

  (document).ready(function() {
    //CODE HERE
});

('#signup_form').submit(function(e) {
    e.preventDefault();
    //Form dating handling such as modifcation or validation
 });

 var fieldName  = ('fieldCSSSelector').val();
 var name = ("#name").val();
var email = ("#email").val();
var password = ("#password").val();

// Check the name length, return an error if field is empty.
if (name.length < 1) {
    ("#name").after(
      '<span class="error">Name is required</span>');
    return
}
// Check the email length, return an error if the field is empty.
if (email.length < 1) {
    ("#email").after('<span class="error">Email is required</span>');
    return;
 }

 // Check the length of the password value, if empty return an error.
if (password.length < 8) {
    ("#password").after('<span class="error">Password must be at least 8 characters long</span>'
  );
    return;
  }

  var regEx = /^([a-zA-Z0-9_\.\-\+])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
  
  var validEmail = regEx.test(email);
  // Also run a regex against the email to verify the value is an email.
if (!validEmail) {
    ("#email").after('<span class="error">Enter a valid email</span>');
    return;
 }


 (".error").remove();

  // If form has been filled send the data to a server.
 // In this case we create an alert message
 alert(
    "Name : " +
    name +
    "\n" +
    "Email : " +
    email +
    "\n" +
    "DO SOMETHING WITH THE INFORMATION"
  );


