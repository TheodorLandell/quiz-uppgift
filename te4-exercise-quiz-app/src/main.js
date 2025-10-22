// =================================
// MAIN - KOPPLA IHOP ALLT
// =================================

import * as Quiz from "./modules/quiz.js";
import * as UI from "./modules/ui.js";

// Hämta knappar
const startBtn = document.getElementById("start-btn");
const nextBtn = document.getElementById("next-btn");
const restartBtn = document.getElementById("restart-btn");
const optionsContainer = document.getElementById("options-container");

// TODO 1: Startknapp - starta quiz
// När startknappen klickas
startBtn.addEventListener("click", () => {
  const firstQuestion = Quiz.init();
  UI.renderQuestion(firstQuestion);
  UI.showView("quiz");
});

// TODO 2: Svarsalternativ - validera svar
// När ett svarsalternativ klickas
let answered = false; // Förhindra dubbelklick

optionsContainer.addEventListener("click", (e) => {
  // Kolla om klick skedde på en knapp
  if (e.target.tagName !== "BUTTON") return;
  if (!e.target.dataset.index) return;
  if (answered) return;

  const button = e.target;
  const answerIndex = parseInt(button.dataset.index);

  // Validera svar
  const isCorrect = Quiz.validateAnswer(answerIndex);

  // Uppdatera poäng om rätt
  if (isCorrect) {
    const newScore = Quiz.updateScore();
    UI.updateScore(newScore);
  }

  // Visa feedback MED rätt svar-index
  const currentQuestion = Quiz.getCurrentQuestion();
  UI.showFeedback(button, isCorrect, currentQuestion.question.correctAnswer);

  // Förhindra fler klick
  answered = true;
});

// TODO 3: Nästa-knapp - gå till nästa fråga
// När "Nästa fråga"-knappen klickas
nextBtn.addEventListener("click", () => {
  const nextQuestionData = Quiz.nextQuestion();

  if (nextQuestionData) {
    // Fler frågor finns
    UI.renderQuestion(nextQuestionData);
    answered = false;
  } else {
    // Inga fler frågor - visa resultat
    const finalScore = Quiz.getFinalScore();
    const message = Quiz.getFeedbackMessage(finalScore.percentage);
    UI.showResult(finalScore, message);
  }
});

// TODO 4: Omstartsknapp - börja om från början
// När "Starta om"-knappen klickas
restartBtn.addEventListener("click", () => {
  const firstQuestion = Quiz.init();
  UI.renderQuestion(firstQuestion);
  UI.showView("quiz");
  answered = false;
});

// Initialt state - visa startsida
UI.showView("start");