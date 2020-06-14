
/* ----------------------- Jaime C Smith - 06/13/2020 ----------------------- */

/* --------- Declaring Variables for both Password and Passwordcheck -------- */
var password = document.getElementById("password");
var confirm_password = document.getElementById("passwordcheck");

/* ----------- Function to assure text in both input fields match ----------- */
function validatePassword(){
  if(password.value != confirm_password.value) {
    confirm_password.setCustomValidity("Passwords Don't Match");
  } else {
    confirm_password.setCustomValidity('');
  }
}

password.onchange = validatePassword;

/* --------- Function to provide with option of displaying password --------- */
function showpassword() {
  var x = document.getElementById("password");
  if (x.type === "password") {
    x.type = "text";
  } else {
    x.type = "password";
  }
}
/* --------- Function to provide with option of displaying password --------- */
function showpassword2() {
  var x = document.getElementById("passwordcheck");
  if (x.type === "password") {
    x.type = "text";
  } else {
    x.type = "password";
  }
}