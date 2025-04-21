function logout() {
  localStorage.removeItem("currentUser");
  window.location.href = "index.html";
}

function validatePassword(password) {
  return password.length >= 8;
}

const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

function validateEmail(email) {
  if (!emailRegex.test(email)) {
    return false;
  }
  return true;
}
