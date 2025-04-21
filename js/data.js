const initialUsers = [
  {
    id: Date.now().toString(),
    name: "admin",
    email: "admin@quiz.com",
    password: "123123",
  },
  {
    id: (Date.now() + 1).toString(),
    name: "Ali",
    email: "ali@hotmail.com",
    password: "alipass",
  },
  {
    id: (Date.now() + 2).toString(),
    name: "Wissam",
    email: "wissam@gmail.com",
    password: "123456",
  },
];
const storedUsers = JSON.parse(localStorage.getItem("users"));
if (!storedUsers) {
  localStorage.setItem("users", JSON.stringify(initialUsers));
}

const quizes = [
  {
    id: "1",
    image: "../assets/quizes-images/js.png",
    title: "JavaScript Basics",
  },
  {
    id: "2",
    image: "../assets/quizes-images/html-css.png",
    title: "HTML & CSS",
  },
  {
    id: "3",
    image: "../assets/quizes-images/programming-logic.png",
    title: "Programming Logic",
  },
  {
    id: "4",
    image: "../assets/quizes-images/web-development.png",
    title: "Web Development",
  },
  {
    id: "5",
    image: "../assets/quizes-images/frontend.png",
    title: "Frontend Frameworks",
  },
];

const quizQuestions = {
  1: [
    {
      text: "Which keyword is used to declare a constant in JavaScript?",
      options: ["let", "const", "var"],
      correctOption: "const",
    },
    {
      text: "What keyword declares a variable in JS?",
      options: ["var", "int", "define"],
      correctOption: "var",
    },
    {
      text: "What does 'typeof' return for an array?",
      options: ["object", "array", "list"],
      correctOption: "object",
    },
  ],
  2: [
    {
      text: "What does HTML stand for?",
      options: [
        "HyperText Markup Language",
        "HighText Markdown Language",
        "HyperTool Markup Language",
      ],
      correctOption: "HyperText Markup Language",
    },
    {
      text: "Which property is used to change the text color in CSS?",
      options: ["font-color", "text-color", "color"],
      correctOption: "color",
    },
    {
      text: "What does CSS stand for?",
      options: [
        "Cascading Style Sheets",
        "Computer Styled Sections",
        "Creative Style Syntax",
      ],
      correctOption: "Cascading Style Sheets",
    },
  ],
  3: [
    {
      text: "Which data structure uses FIFO order?",
      options: ["Stack", "Queue", "Tree"],
      correctOption: "Queue",
    },
    {
      text: "Which operator is used for equality check?",
      options: ["=", "==", "==="],
      correctOption: "===",
    },
    {
      text: "What does a loop do?",
      options: [
        "Runs code multiple times",
        "Stops code execution",
        "Returns a value",
      ],
      correctOption: "Runs code multiple times",
    },
  ],
  4: [
    {
      text: "Which language runs in the browser?",
      options: ["Python", "JavaScript", "C++"],
      correctOption: "JavaScript",
    },
    {
      text: "Which one is a backend language?",
      options: ["HTML", "CSS", "Node.js"],
      correctOption: "Node.js",
    },
    {
      text: "Which HTTP method is used to fetch data?",
      options: ["POST", "GET", "PUT"],
      correctOption: "GET",
    },
  ],
  5: [
    {
      text: "Which library is maintained by Meta?",
      options: ["Vue", "React", "Angular"],
      correctOption: "React",
    },
    {
      text: "What is JSX?",
      options: [
        "A syntax extension for JavaScript",
        "A programming language",
        "A CSS framework",
      ],
      correctOption: "A syntax extension for JavaScript",
    },
    {
      text: "Which framework uses templates and directives?",
      options: ["Angular", "React", "Svelte"],
      correctOption: "Angular",
    },
  ],
};

const storedQuizes = JSON.parse(localStorage.getItem("quizes"));
if (!storedQuizes) {
  localStorage.setItem("quizes", JSON.stringify(quizes));
}

const storedQuizesQuestions = JSON.parse(localStorage.getItem("quizQuestions"));

if (!storedQuizesQuestions) {
  localStorage.setItem("quizQuestions", JSON.stringify(quizQuestions));
}
