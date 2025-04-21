document.addEventListener("DOMContentLoaded", () => {
  const registerContainer = document.getElementById("register-container");
  const loginContainer = document.getElementById("login-container");

  const showLoginForm = document.getElementById("show-login-form");
  const showRegisterForm = document.getElementById("show-register-form");

  showLoginForm.addEventListener("click", (e) => {
    e.preventDefault();
    registerContainer.classList.toggle("hidden");
    loginContainer.classList.toggle("hidden");
  });
  showRegisterForm.addEventListener("click", (e) => {
    e.preventDefault();
    loginContainer.classList.toggle("hidden");
    registerContainer.classList.toggle("hidden");
  });
});

const registerBtn = document.querySelector(".register-btn");
registerBtn.addEventListener("click", (e) => {
  e.preventDefault();
  const registerName = document.querySelector(".register-name");
  const registerEmail = document.querySelector(".register-email");
  const registerPassword = document.querySelector(".register-password");
  if (
    !registerName.value.trim() ||
    !registerEmail.value.trim() ||
    !registerPassword.value.trim()
  ) {
    alert("Please fill in all the fields");
    return;
  }
  if (!validateEmail(registerEmail.value.trim())) {
    alert("This email is invalid");
    return;
  }

  if (!validatePassword(registerPassword.value.trim())) {
    alert("The password should at least 8 characters");
    return;
  }

  let users = JSON.parse(localStorage.getItem("users")) || [];

  const user = users.find(
    (user) =>
      user.email.toLowerCase() === registerEmail.value.trim().toLowerCase()
  );

  if (user) {
    const oldWarning = document.getElementById("email-warning");
    if (oldWarning) {
      oldWarning.remove();
    }
    const span = document.createElement("span");
    span.id = "email-warning";
    span.textContent = "This email exist! try another one";
    span.style.color = "red";
    span.style.fontSize = "12px";
    registerEmail.parentNode.insertBefore(span, registerEmail.nextSibling);
    return;
  }
  const userId = Date.now().toString();

  const newUser = {
    id: userId,
    name: registerName.value.trim(),
    email: registerEmail.value.trim(),
    password: registerPassword.value.trim(),
  };

  users.push(newUser);
  localStorage.setItem("users", JSON.stringify(users));
  localStorage.setItem("currentUser", JSON.stringify(newUser));

  window.location.href = "home.html";
});

const loginBtn = document.querySelector(".login-btn");
loginBtn.addEventListener("click", (e) => {
  e.preventDefault();
  const loginEmail = document.querySelector(".login-email");
  const loginPassword = document.querySelector(".login-password");

  let users = JSON.parse(localStorage.getItem("users")) || [];
  const user = users.find(
    (user) =>
      user.email.toLowerCase() === loginEmail.value.toLowerCase() &&
      user.password === loginPassword.value
  );

  if (user) {
    localStorage.setItem("currentUser", JSON.stringify(user));
    if (user.email.toLowerCase() === "admin@quiz.com") {
      window.location.href = "dashboard.html";
    } else {
      window.location.href = "home.html";
    }
  }
});
