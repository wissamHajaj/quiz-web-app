const urlParams = new URLSearchParams(window.location.search);
const quizId = urlParams.get("id");
// console.log(quizId);
const quizes = JSON.parse(localStorage.getItem("quizes")) || [];
const quiz = quizes.find((quiz) => quiz.id === quizId);
// console.log(quiz);

let quizQuestions = JSON.parse(localStorage.getItem("quizQuestions")) || [];
const questionsForQuiz = quizQuestions[quizId];

const quizHeader = document.querySelector(".quiz-header");
quizHeader.textContent = quiz.title;

const quizQuestionsContainer = document.querySelector(
  ".quiz-questions-container"
);

questionsForQuiz.forEach((question) => addQuestionToUi(question));

function addQuestionToUi(question) {
  const questionContainer = document.createElement("div");
  let optionsSet = "";
  question.options.forEach((option, index) => {
    optionsSet += `<label for="option-${index}">
            <input type="radio" name="option" value="${option}" id="option-${index}" />
            ${option}
            </label>`;
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

// const submitBtn = document.querySelector(".submit-btn");
