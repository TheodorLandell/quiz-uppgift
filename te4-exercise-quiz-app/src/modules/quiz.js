// =================================
// QUIZ-LOGIK (Affärslogik)
// =================================

import { getAllQuestions } from "./questions.js";

// State - håller koll på nuvarande quiz-tillstånd
let state = {
  questions: [],
  currentIndex: 0,
  score: 0,
  totalQuestions: 0,
};

// Initiera quiz - hämta frågor och återställ state
export function init() {
  state.questions = getAllQuestions();
  state.currentIndex = 0;
  state.score = 0;
  state.totalQuestions = state.questions.length;

  return getCurrentQuestion();
}

// Hämta nuvarande fråga
export function getCurrentQuestion() {
  return {
    question: state.questions[state.currentIndex],
    currentIndex: state.currentIndex,
    totalQuestions: state.totalQuestions,
    score: state.score,
  };
}

// Validera om svaret är rätt eller fel
export function validateAnswer(userAnswerIndex) {
  const currentQuestion = state.questions[state.currentIndex];
  return userAnswerIndex === currentQuestion.correctAnswer;
}

// Öka poängen om svaret är rätt
export function updateScore() {
  state.score++;
  return state.score;
}

// Gå till nästa fråga
export function nextQuestion() {
  state.currentIndex++;

  if (state.currentIndex < state.totalQuestions) {
    return getCurrentQuestion();
  }

  return null; // Inga fler frågor
}

// Beräkna och returnera slutresultat
export function getFinalScore() {
  const percentage = Math.round((state.score / state.totalQuestions) * 100);

  return {
    score: state.score,
    total: state.totalQuestions,
    percentage: percentage,
  };
}

// Feedbackmeddelande baserat på resultat
export function getFeedbackMessage(percentage) {
  if (percentage >= 90) {
    return "Utmärkt prestation! Du är en riktig Liverpool-expert! 🌟⚽";
  } else if (percentage >= 70) {
    return "Bra jobbat! Du vet mycket om The Reds! 👍🔴";
  } else if (percentage >= 50) {
    return "Godkänt! Men du kan lära dig mer om Liverpool! 😊";
  } else {
    return "Fortsätt öva! Läs på om Liverpools historia! 💪📚";
  }
}

// Randomisera frågeordning
export function shuffleQuestions() {
  for (let i = state.questions.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [state.questions[i], state.questions[j]] = [
      state.questions[j],
      state.questions[i],
    ];
  }
}