"use strict";
const formLogin = document.querySelector(".login-form");
formLogin.addEventListener("submit", (event) => {
  event.preventDefault();
  const { email, password } = formLogin.elements;
  const emailValue = email.value.trim();
  const passwordValue = password.value.trim();
  if (!emailValue || !passwordValue) {
    alert("All form fields must be filled in");
    return;
  }
  const formData = {
    email: emailValue,
    password: passwordValue,
  };
  console.log(formData);
  formLogin.reset();
});
