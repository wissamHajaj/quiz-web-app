logoutBtn = document.querySelector(".logout-btn");
logoutBtn.addEventListener("click", () => {
  localStorage.removeItem("currentUser");
  window.location.href = "index.html";
});
