const urlParams = new URLSearchParams(window.location.search);
const quizId = urlParams.get("id");
// console.log(quizId);
const quizes = JSON.parse(localStorage.getItem("quizes")) || [];
const quiz = quizes.find((quiz) => quiz.id === quizId);

let quizQuestions = JSON.parse(localStorage.getItem("quizQuestions")) || [];
// all questions for the quiz
const questionsForQuiz = quizQuestions[quizId];

const quizHeader = document.querySelector(".quiz-header");
quizHeader.textContent = quiz.title;

const quizQuestionsContainer = document.querySelector(
  ".quiz-questions-container"
);

questionsForQuiz.forEach((question, questionIndex) =>
  addQuestionToUi(question, questionIndex)
);

function addQuestionToUi(question, questionIndex) {
  const questionContainer = document.createElement("div");
  let optionsSet = "";
  question.options.forEach((option, optionIndex) => {
    optionsSet += `<label for="option-${optionIndex}-${questionIndex}"><input type="radio" name="option" value="${option}" id="option-${optionIndex}-${questionIndex}" /> ${option} </label>`;
  });
  questionContainer.innerHTML = `
        <h2>${question.text}</h2>
        <form class="options-form">
         ${optionsSet}
        </form>
          `;
  questionContainer.classList.add("question-container");
  quizQuestionsContainer.appendChild(questionContainer);
}

const submitBtn = document.querySelector(".submit-btn");
let answers = [];
submitBtn.addEventListener("click", () => {
  let allAnswers = true;
  document
    .querySelectorAll(".question-container")
    .forEach((question, index) => {
      const selectedOption = question.querySelector(
        "input[type='radio']:checked"
      );
      if (selectedOption) {
        answers.push({
          selectedIndex: index,
          selectedAnswer: selectedOption.value,
        });
      } else {
        allAnswers = false;
      }
    });
  if (!allAnswers) {
    alert("Please answer all the question");
    return;
  }
  let grade = 0;
  const valueOfQuestion = 100 / answers.length;

  questionsForQuiz.forEach((question, index) => {
    if (answers[index]) {
      const answer = answers[index].selectedAnswer;
      if (answer === question.correctOption) {
        grade += valueOfQuestion;
      }
    }
  });

  //   console.log(grade);
  alert(`You got a grade:  ${grade} / 100`);
  saveGradeToLocalStorage(grade);
  grade = 0;
  answers = [];
});

function saveGradeToLocalStorage(grade) {
  const user = JSON.parse(localStorage.getItem("currentUser"));
  const userId = user.id;
  const usersGrades = JSON.parse(localStorage.getItem("usersGrade")) || [];

  const userGrade = {
    id: userId,
    grade: grade,
  };
  usersGrades.push(userGrade);
  localStorage.setItem("usersGrade", JSON.stringify(usersGrades));
}
