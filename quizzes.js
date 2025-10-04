let score = 0;

// Pool of 25 questions
const quizPool = [
  {
    question: "Which of the following is a renewable energy source?",
    answers: ["Solar Energy", "Coal", "Petrol", "Natural Gas"],
    correct: 0
  },
  {
    question: "Which material is most commonly recycled?",
    answers: ["Plastic Bags", "Paper", "Styrofoam", "Rubber"],
    correct: 1
  },
  {
    question: "How much of the Earth’s surface is covered by water?",
    answers: ["50%", "60%", "70%", "80%"],
    correct: 2
  },
  {
    question: "Which gas is responsible for global warming?",
    answers: ["Oxygen", "Carbon Dioxide", "Nitrogen", "Helium"],
    correct: 1
  },
  {
    question: "What is the main cause of deforestation?",
    answers: ["Planting trees", "Logging", "Floods", "Recycling"],
    correct: 1
  },
  {
    question: "Which is the cleanest form of energy?",
    answers: ["Solar", "Coal", "Diesel", "Natural Gas"],
    correct: 0
  },
  {
    question: "What does ‘3R’ stand for in sustainability?",
    answers: ["Reduce, Reuse, Recycle", "Read, Run, Repeat", "Rain, River, Road", "Remove, Replace, Return"],
    correct: 0
  },
  {
    question: "Which layer of the atmosphere protects us from UV rays?",
    answers: ["Troposphere", "Stratosphere", "Ozone Layer", "Exosphere"],
    correct: 2
  },
  {
    question: "What is the largest source of energy on Earth?",
    answers: ["The Moon", "Volcanoes", "The Sun", "Coal"],
    correct: 2
  },
  {
    question: "Which country produces the most CO₂ emissions?",
    answers: ["India", "USA", "China", "Brazil"],
    correct: 2
  },
  {
    question: "What percentage of plastic is recycled globally?",
    answers: ["9%", "25%", "50%", "70%"],
    correct: 0
  },
  {
    question: "Which of these is biodegradable?",
    answers: ["Plastic Bottle", "Banana Peel", "Glass", "Metal Can"],
    correct: 1
  },
  {
    question: "Which type of energy does a wind turbine produce?",
    answers: ["Solar Energy", "Wind Energy", "Geothermal Energy", "Nuclear Energy"],
    correct: 1
  },
  {
    question: "Which is the most abundant greenhouse gas?",
    answers: ["Carbon Dioxide", "Water Vapor", "Methane", "Ozone"],
    correct: 1
  },
  {
    question: "Which of the following contributes most to ocean pollution?",
    answers: ["Plastic Waste", "Wood", "Metal", "Paper"],
    correct: 0
  },
  {
    question: "What is Earth’s primary source of oxygen?",
    answers: ["Rainforests", "Oceans", "Mountains", "Soil"],
    correct: 1
  },
  {
    question: "What is the main component of acid rain?",
    answers: ["Sulfur Dioxide", "Carbon Monoxide", "Methane", "Oxygen"],
    correct: 0
  },
  {
    question: "Which continent has the largest rainforest?",
    answers: ["Asia", "Africa", "South America", "Australia"],
    correct: 2
  },
  {
    question: "Which is the cleanest fuel?",
    answers: ["Diesel", "CNG", "Petrol", "Coal"],
    correct: 1
  },
  {
    question: "What is the main cause of ozone depletion?",
    answers: ["CO₂", "CFCs", "Methane", "Nitrogen"],
    correct: 1
  },
  {
    question: "Which of the following is NOT renewable?",
    answers: ["Solar", "Wind", "Coal", "Hydro"],
    correct: 2
  },
  {
    question: "What percent of Earth’s water is freshwater?",
    answers: ["2.5%", "10%", "25%", "50%"],
    correct: 0
  },
  {
    question: "Which practice saves the most water?",
    answers: ["Flood irrigation", "Sprinkler irrigation", "Drip irrigation", "Canal irrigation"],
    correct: 2
  },
  {
    question: "Which gas is used by plants during photosynthesis?",
    answers: ["Carbon Dioxide", "Oxygen", "Nitrogen", "Hydrogen"],
    correct: 0
  },
  {
    question: "Which is the largest renewable energy source globally?",
    answers: ["Hydro", "Solar", "Wind", "Geothermal"],
    correct: 0
  }
];

// Function to shuffle array
function shuffle(array) {
  return array.sort(() => Math.random() - 0.5);
}

// Pick random 5 questions from pool
const selectedQuestions = shuffle([...quizPool]).slice(0, 5);

// Render questions
function renderQuiz() {
  const container = document.getElementById("quizContainer");
  container.innerHTML = "";

  selectedQuestions.forEach((q, index) => {
    const card = document.createElement("div");
    card.className = "quiz-card";

    let answersHTML = q.answers
      .map((ans, i) => 
        `<li><button onclick="checkAnswer(this, ${i === q.correct})">${ans}</button></li>`
      )
      .join("");

    card.innerHTML = `
      <h2>${index + 1}. ${q.question}</h2>
      <ul>${answersHTML}</ul>
    `;
    container.appendChild(card);
  });
}

function checkAnswer(button, isCorrect) {
  const buttons = button.parentElement.parentElement.querySelectorAll("button");
  buttons.forEach(btn => btn.disabled = true);

  if (isCorrect) {
    button.classList.add("correct");
    score++;
  } else {
    button.classList.add("wrong");
  }

  document.getElementById("score").textContent = score;
}

function resetQuiz() {
  score = 0;
  document.getElementById("score").textContent = score;
  location.reload(); // reload to get a new random set
}

// Load quiz on start
renderQuiz();
