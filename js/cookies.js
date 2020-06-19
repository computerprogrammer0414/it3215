function nextStep() {
  document.cookie = "userName=" + document.getElementsByName("username")[0].value;
  document.cookie = "password=" + document.getElementsByName("password")[0].value;
  document.cookie = "passwordVerify=" + document.getElementsByName("passwordcheck")[0].value;
  document.cookie = "firstName=" + document.getElementsByName("firstname")[0].value;
  document.cookie = "lastName=" + document.getElementsByName("lastname")[0].value;
  document.cookie = "email=" + document.getElementsByName("email")[0].value;
  document.cookie = "phoneNumber=" + document.getElementsByName("phone")[0].value;
  document.cookie = "signUpNewsletter=" + document.getElementsByName("newsletter")[0].value;
 
}