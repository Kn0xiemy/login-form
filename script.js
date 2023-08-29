document.addEventListener('DOMContentLoaded', () => {

});

var loginForm = document.querySelector('#log-container');
var registerForm = document.querySelector('#reg-container');


function login() {
  loginForm.classList.remove("hidden");
  registerForm.classList.add("hidden");
}

function register() {  
  loginForm.classList.add("hidden");
  registerForm.classList.remove("hidden");
}
  // new way of being led to the accordion page, since the previous one was ugly and inefficient
var navigateButton = document.querySelector(".login-btn")

navigateButton.addEventListener("click", function() {
  var accordionPage = "accordion.html";
  window.location.href = accordionPage;
})

