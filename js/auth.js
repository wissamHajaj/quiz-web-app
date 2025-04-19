document.addEventListener("DOMContentLoaded", () => {
  const registerContainer = document.getElementById("register-container");
  const loginContainer = document.getElementById("login-container");

  const showLoginForm = document.getElementById("show-login-form");
  const showRegisterForm = document.getElementById("show-register-form");

  showLoginForm.addEventListener("click", (e) => {
    e.preventDefault();
    registerContainer.classList.toggle("hidden");
    loginContainer.classList.toggle("hidden");

    console.log("showlogin clicked");
  });
  showRegisterForm.addEventListener("click", (e) => {
    e.preventDefault();
    loginContainer.classList.toggle("hidden");
    registerContainer.classList.toggle("hidden");
  });
});
