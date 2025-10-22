// =================================
// UI-HANTERING (Presentation)
// =================================

// Hämta alla DOM-element
const startView = document.getElementById("start-view");
const quizView = document.getElementById("quiz-view");
const resultView = document.getElementById("result-view");

const questionNumber = document.getElementById("question-number");
const scoreDisplay = document.getElementById("score-display");
const categoryEl = document.getElementById("category");
const questionText = document.getElementById("question-text");
const optionsContainer = document.getElementById("options-container");
const feedbackEl = document.getElementById("feedback");
const nextBtn = document.getElementById("next-btn");

const finalScore = document.getElementById("final-score");
const percentage = document.getElementById("percentage");
const feedbackMessage = document.getElementById("feedback-message");

// Hjälpfunktion för att visa/dölja vyer
export function showView(viewName) {
  startView.classList.remove("active");
  quizView.classList.remove("active");
  resultView.classList.remove("active");

  if (viewName === "start") {
    startView.classList.add("active");
  } else if (viewName === "quiz") {
    quizView.classList.add("active");
  } else if (viewName === "result") {
    resultView.classList.add("active");
  }
}

// Visa en fråga och dess svarsalternativ
export function renderQuestion(questionData) {
  const { question, currentIndex, totalQuestions } = questionData;

  // Uppdatera frågeinfo
  questionText.textContent = question.question;
  questionNumber.textContent = `Fråga ${currentIndex + 1} av ${totalQuestions}`;
  categoryEl.textContent = question.category;

  // Rensa tidigare svarsalternativ
  optionsContainer.innerHTML = "";

  // Skapa nya svarsalternativ med Tailwind-styling
  question.options.forEach((option, index) => {
    const button = document.createElement("button");
    button.textContent = option;
    button.dataset.index = index;
    
    // Lägg till Tailwind-klasser för styling
    button.className = "w-full text-left p-4 bg-gray-50 hover:bg-gray-100 border-2 border-gray-200 rounded-lg transition duration-200 hover:shadow-md font-medium text-gray-700";
    
    optionsContainer.appendChild(button);
  });

  // Dölj feedback
  feedbackEl.classList.add("hidden");
}

// Visa feedback på svarsknappen (grön eller röd)
export function showFeedback(button, isCorrect, correctAnswerIndex) {
  if (isCorrect) {
    // RÄTT SVAR: Grön styling
    button.className = "w-full text-left p-4 bg-green-100 border-2 border-green-500 rounded-lg font-medium text-green-800 shadow-md";
    
    feedbackEl.textContent = "✅ Rätt!";
    feedbackEl.className = "p-4 rounded-lg mb-6 text-center font-semibold text-lg bg-green-100 text-green-800 border-2 border-green-500";
    feedbackEl.classList.remove("hidden");
    
  } else {
    // FEL SVAR: Röd styling på valt svar
    button.className = "w-full text-left p-4 bg-red-100 border-2 border-red-500 rounded-lg font-medium text-red-800 shadow-md";
    
    // Visa det rätta svaret i grönt
    const allButtons = optionsContainer.querySelectorAll("button");
    allButtons.forEach((btn, index) => {
      if (index === correctAnswerIndex) {
        btn.className = "w-full text-left p-4 bg-green-100 border-2 border-green-500 rounded-lg font-medium text-green-800 shadow-md";
      }
    });
    
    feedbackEl.textContent = "❌ Fel! Se det rätta svaret markerat i grönt.";
    feedbackEl.className = "p-4 rounded-lg mb-6 text-center font-semibold text-lg bg-red-100 text-red-800 border-2 border-red-500";
    feedbackEl.classList.remove("hidden");
  }
}

// Visa resultatskärmen med poäng och procent
export function showResult(finalScoreData, message) {
  finalScore.textContent = `${finalScoreData.score}/${finalScoreData.total}`;
  percentage.textContent = `${finalScoreData.percentage}%`;
  feedbackMessage.textContent = message;

  showView("result");
}

// Uppdatera poängvisningen under quiz
export function updateScore(score) {
  scoreDisplay.textContent = `Poäng: ${score}`;
}