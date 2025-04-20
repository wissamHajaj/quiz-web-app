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