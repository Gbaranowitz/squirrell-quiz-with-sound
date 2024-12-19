// Quiz Data
const questions = [
    {
      question: "What is the average lifespan of a squirrel?",
      options: ["5-6 years", "10-12 years", "20 years"],
      answer: "5-6 years"
    },
    {
      question: "What color is a flying squirrel's fur?",
      options: ["Red", "Gray", "Brown"],
      answer: "Gray"
    },
    {
      question: "What do squirrels primarily eat?",
      options: ["Meat", "Nuts and seeds", "Grass"],
      answer: "Nuts and seeds"
    },
    {
        question: "What Country is the giant purple squirrel located in?",
        options: ["Japan", "Italy", "India"],
        answer: "India"
    }
  ];
  
  let currentQuestionIndex = 0;
  let score = 0;
  
  // DOM Elements
  const questionEl = document.getElementById("question");
  const optionsEl = document.getElementById("options");
  const nextButton = document.getElementById("next-button");
  const resultContainer = document.getElementById("result-container");
  const scoreEl = document.getElementById("score");
  const restartButton = document.getElementById("restart-button");
  
  // Load a question
  function loadQuestion() {
    const currentQuestion = questions[currentQuestionIndex];
    questionEl.textContent = currentQuestion.question;
    optionsEl.innerHTML = "";
  
    // Use a loop to generate options
    currentQuestion.options.forEach(option => {
      const li = document.createElement("li");
      li.textContent = option;
      li.addEventListener("click", () => selectAnswer(option));
      optionsEl.appendChild(li);
    });
  }
  
  // Select an answer
  function selectAnswer(selectedOption) {
    const currentQuestion = questions[currentQuestionIndex];
  
    // Decision logic to validate the answer
    if (selectedOption === currentQuestion.answer) {
      score++;
    }
  
    // Highlight the correct answer
    Array.from(optionsEl.children).forEach(li => {
      li.style.backgroundColor = li.textContent === currentQuestion.answer ? "#2a9d8f" : "#e63946";
    });
  
    // Disable further selection
    optionsEl.querySelectorAll("li").forEach(li => li.style.pointerEvents = "none");
  }
  
  // Handle the next button
  nextButton.addEventListener("click", () => {
    currentQuestionIndex++;
    if (currentQuestionIndex < questions.length) {
      loadQuestion();
    } else {
      showResults();
    }
  });
  
  // Show the result
  function showResults() {
    document.getElementById("quiz-container").classList.add("hidden");
    resultContainer.classList.remove("hidden");
    scoreEl.textContent = score;
  }
  
  // Restart the quiz
  restartButton.addEventListener("click", () => {
    currentQuestionIndex = 0;
    score = 0;
    resultContainer.classList.add("hidden");
    document.getElementById("quiz-container").classList.remove("hidden");
    loadQuestion();
  });
  
  // Initialize the quiz
  loadQuestion();
  