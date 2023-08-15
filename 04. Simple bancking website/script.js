const loginBtn = document.getElementById("login-btn");
const emailField = document.getElementById("email-field");
const passwordField = document.getElementById("password-field");

// loging funcion and switch to the next page
loginBtn.addEventListener("click", function () {
  const email = emailField.value;
  const password = passwordField.value;
  if (email === "admin@mail.com" && password === "admin") {
    window.location.href = "main.html";
  } else {
    alert("you've lost your Login Information");
  }
});


