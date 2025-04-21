const logoutBtn = document.querySelector(".logout-btn");
logoutBtn.addEventListener("click", () => logout());

const getQuizes = JSON.parse(localStorage.getItem("quizes"));

function displayUserInfoGrade() {
  const allUsers = JSON.parse(localStorage.getItem("users")) || [];
  const registeredClientsUsers = allUsers.filter(
    (user) => user.email != "admin@quiz.com"
  );

  const usersGrades = JSON.parse(localStorage.getItem("usersGrade")) || [];

  console.log(registeredClientsUsers);
  console.log(usersGrades);

  const userGradeContainer = document.querySelector(".users-grades-container");

  registeredClientsUsers.forEach((user) => {
    const getGrade = usersGrades.find(
      (userGrades) => userGrades.id === user.id
    );

    if (getGrade) {
      console.log(getGrade.grades);
    }

    let gradesContainer = "";
    if (getGrade && getGrade.grades.length > 0) {
      gradesContainer =
        `<ul class="grades-list">` +
        getGrade.grades.map((grade, index) => {
          const getQuiz = getQuizes.find((quiz) => quiz.id === grade.quizId);
          return `<li>Quiz ${index + 1}: ${getQuiz.title} (ID: ${
            grade.quizId
          }): ${grade.grade}/100</li>`;
        }).join("") +
        "</ul>";
    } else {
      gradesContainer = `<p>${user.name} did not do any quiz</p>`;
    }

    const userCard = document.createElement("div");
    userCard.classList.add("user-card");

    userCard.innerHTML = `<h3><p class="info">Name: <span>${user.name} </span></p> <p class="info"><p>Email: <span>${user.email}</span></p></h3>
    ${gradesContainer}`;
    userGradeContainer.appendChild(userCard);
  });
}

displayUserInfoGrade();
