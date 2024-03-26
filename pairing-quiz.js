const questions = [
  {
    question: "How do you like your wine?",
    options: ["Red", "White", "Rosé"]
  },
  {
    question: "How sweet do you like your wine?",
    options: ["Dry", "Semi-Dry", "Sweet"]
  },
  {
    question: "What flavors do you prefer?",
    options: ["Fruity", "Earthy", "Herbal"]
  }
];

const wines = {
  Red: {
    Dry: {
      Fruity: "Pinot Noir",
      Earthy: "Cabernet Sauvignon",
      Herbal: "Merlot"
    },
    "Semi-Dry": {
      Fruity: "Malbec",
      Earthy: "Syrah",
      Herbal: "Zinfandel"
    },
    Sweet: {
      Fruity: "Shiraz",
      Earthy: "Grenache",
      Herbal: "Sangiovese"
    }
  },
  White: {
    Dry: {
      Fruity: "Chardonnay",
      Earthy: "Pinot Grigio",
      Herbal: "Sauvignon Blanc"
    },
    "Semi-Dry": {
      Fruity: "Riesling",
      Earthy: "Viognier",
      Herbal: "Gewürztraminer"
    },
    Sweet: {
      Fruity: "Moscato",
      Earthy: "Chenin Blanc",
      Herbal: "Gruner Veltliner"
    }
  },
  Rosé: {
    Dry: {
      Fruity: "Grenache Rosé",
      Earthy: "Provence Rosé",
      Herbal: "Tempranillo Rosé"
    },
    "Semi-Dry": {
      Fruity: "White Zinfandel",
      Earthy: "Sangiovese Rosé",
      Herbal: "Syrah Rosé"
    },
    Sweet: {
      Fruity: "Pink Moscato",
      Earthy: "Cabernet Sauvignon Rosé",
      Herbal: "Merlot Rosé"
    }
  }
};

let currentQuestion = 0;
let answers = [];
let quizStarted = false;

function startQuiz() {
  quizStarted = true;
  document.getElementById("startButton").style.display = "none";
  document.getElementById("quiz").style.display = "block";
  loadQuestion();
}

function loadQuestion() {
  const questionContainer = document.getElementById("question");
  const optionsContainer = document.getElementById("options");

  questionContainer.textContent = questions[currentQuestion].question;
  optionsContainer.innerHTML = "";

  questions[currentQuestion].options.forEach(option => {
    const button = document.createElement("button");
    button.textContent = option;
    button.addEventListener("click", () => {
      answers.push(option);
      nextQuestion();
    });
    optionsContainer.appendChild(button);
  });
}

function nextQuestion() {
  if (currentQuestion < questions.length - 1) {
    currentQuestion++;
    loadQuestion();
  } else {
    showResult();
  }
}

function resetQuiz() {
  currentQuestion = 0;
  answers = [];
  quizStarted = false;
  document.getElementById("result").style.display = "none";
  document.getElementById("quiz").style.display = "none";
  document.getElementById("startButton").style.display = "block";
}

function showResult() {
  const resultContainer = document.getElementById("result");
  const wineResult = document.getElementById("wineResult");

  resultContainer.style.display = "block";
  document.getElementById("quiz").style.display = "none";
  const wineType = answers[0];
  const sweetness = answers[1];
  const flavor = answers[2];

  const suggestedWine = wines[wineType][sweetness][flavor];
  wineResult.textContent = suggestedWine;
}