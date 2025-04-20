logoutBtn = document.querySelector(".logout-btn");
logoutBtn.addEventListener("click", () => {
  localStorage.removeItem("currentUser");
  window.location.href = "index.html";
});

document.addEventListener("DOMContentLoaded", () => {
  const currentUser = JSON.parse(localStorage.getItem("currentUser"));
  if (!currentUser) {
    window.location.href = "index.html";
    return;
  }
  const quizes = JSON.parse(localStorage.getItem("quizes")) || [];
  // console.log(quizes);
  quizes.forEach((quiz) => addQuizToUi(quiz));
});

function addQuizToUi(quiz) {
  const quizCard = document.createElement("div");
  quizCard.innerHTML = `
          <img class="quiz-image" src="${quiz.title}" alt="" />
          <h3 class="quiz-title">${quiz.title}</h3>
          <button class="start-btn">Start</button>     
        `;
  quizCard.classList.add("quiz-card");
  quizCard.setAttribute("data-id", quiz.id);
  document.querySelector(".quizes-section").appendChild(quizCard);
}

document.addEventListener("DOMContentLoaded", () => {
  const quizesSection = document.querySelector(".quizes-section");
  quizesSection.addEventListener("click", (e) => {
    console.log("run");
    if (e.target.classList.contains("start-btn")) {
      const quizCard = e.target.closest(".quiz-card");
      const quizId = quizCard.dataset.id;

      console.log(quizId);
      window.location.href = `quiz.html?id=${quizId}`;
    }
  });
});
