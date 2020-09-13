const questions = [
  {
    id: 1,
    value: "How old I am?",
    options: [
      {
        id: 1,
        value: "38",
      },
      {
        id: 2,
        value: "35",
      },
      {
        id: 3,
        value: "37",
      },
      {
        id: 4,
        value: "39",
      },
    ],
    correct: 1,
  },
  {
    id: 2,
    value: "Name of my dogs",
    options: [
      {
        id: 1,
        value: "True and false",
      },
      {
        id: 2,
        value: "Ren & Stimpy",
      },
      {
        id: 3,
        value: "Usagui and Tobby",
      },
      {
        id: 4,
        value: "Whysky and Brandy",
      },
    ],
    correct: 3,
  },
  {
    id: 3,
    value: "Which is the highest mountain?",
    options: [
      {
        id: 1,
        value: "Pico Espejo",
      },
      {
        id: 2,
        value: "Rushmore",
      },
      {
        id: 3,
        value: "Makalu",
      },
      {
        id: 4,
        value: "Everest",
      },
    ],
    correct: 4,
  },
];
let currentQuestion = 0;
let answer = null;
let score = 0;
const main = document.getElementById("main");
const cOptions = document.querySelectorAll("[name=option]");
const lOptions = document.querySelectorAll("label");
const submitBtn = document.getElementById("submitBtn");
const cQuestion = document.getElementById("question");

function loadQuestion() {
  deselectOptions();
  cQuestion.innerText = questions[currentQuestion].value;

  cOptions.forEach(function (option, i) {
    option.value = questions[currentQuestion].options[i].id;
  });
  lOptions.forEach(function (option, i) {
    option.innerText = questions[currentQuestion].options[i].value;
  });
}

function deselectOptions() {
  cOptions.forEach(function (option) {
    option.checked = false;
  });
}

function getAnswer() {
  cOptions.forEach(function (option) {
    if (option.checked) {
      answer = parseInt(option.value);
      return;
    }
  });
}

submitBtn.addEventListener("click", function () {
  getAnswer();
  if (answer) {
    if (questions[currentQuestion].correct === answer) {
      score++;
    }
    currentQuestion++;
    if (currentQuestion < questions.length) {
      loadQuestion();
    } else {
      main.innerHTML = `
        <h2>You answered correctly at ${score}/${questions.length} questions.</h2>
        <button onclick="location.reload()">Reload</button>
      `;
    }
  }
});

loadQuestion();
