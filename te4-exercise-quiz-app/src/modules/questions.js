// =================================
// FRÅGOR - STARTER DATA
// =================================

export const questions = [
  {
    id: 1,
    category: "Historia",
    question: "Vilket år grundades Liverpool FC?",
    options: ["1888", "1892", "1900", "1905"],
    correctAnswer: 1, // 1892
  },
  {
    id: 2,
    category: "Legends",
    question: "Vem är Liverpool FC:s främste målskytt genom tiderna?",
    options: ["Kenny Dalglish", "Ian Rush", "Robbie Fowler", "Steven Gerrard"],
    correctAnswer: 1, // Ian Rush (346 mål)
  },
  {
    id: 3,
    category: "Champions League",
    question: "Hur många gånger har Liverpool vunnit Champions League/European Cup?",
    options: ["4", "5", "6", "7"],
    correctAnswer: 2, // 6 gånger (1977, 1978, 1981, 1984, 2005, 2019)
  },
  {
    id: 4,
    category: "Miraculous Night",
    question: "Vilken ställning vände Liverpool i Champions League-semifinalen 2019 mot Barcelona?",
    options: ["0-3", "0-4", "1-3", "0-5"],
    correctAnswer: 0, // 0-3 (vann 4-0 hemma)
  },
  {
    id: 5,
    category: "Istanbul",
    question: "Vilken ställning låg Liverpool under med i halvtid i Champions League-finalen 2005?",
    options: ["0-2", "0-3", "1-3", "0-4"],
    correctAnswer: 1, // 0-3 (vann på straffar)
  },
  {
    id: 6,
    category: "Managers",
    question: "Vem var Liverpool-manager när laget vann första gången European Cup 1977?",
    options: ["Bill Shankly", "Bob Paisley", "Joe Fagan", "Kenny Dalglish"],
    correctAnswer: 1, // Bob Paisley
  },
  {
    id: 7,
    category: "Legends",
    question: "Hur många säsonger spelade Steven Gerrard för Liverpool?",
    options: ["15", "17", "19", "21"],
    correctAnswer: 1, // 17 säsonger (1998-2015)
  },
  {
    id: 8,
    category: "Records",
    question: "Vem gjorde det snabbaste målet i en Champions League-final för Liverpool?",
    options: ["Mohamed Salah", "Steven Gerrard", "Paolo Maldini", "Xabi Alonso"],
    correctAnswer: 0, // Mohamed Salah (2 minuter, 2019)
  },
  {
    id: 9,
    category: "Tragedy",
    question: "Vilket år inträffade Hillsborough-katastrofen?",
    options: ["1985", "1987", "1989", "1991"],
    correctAnswer: 2, // 1989
  },
  {
    id: 10,
    category: "Premier League",
    question: "Vilket år vann Liverpool sin första Premier League-titel?",
    options: ["2014", "2018", "2019", "2020"],
    correctAnswer: 3, // 2020 (säsongen 2019/20)
  },
  {
    id: 11,
    category: "Transfers",
    question: "Vilket var Liverpool:s rekordsigillsköp före 2025?",
    options: ["Virgil van Dijk", "Darwin Núñez", "Luis Díaz", "Alisson Becker"],
    correctAnswer: 1, // Darwin Núñez (£85 miljoner, 2022)
  },
  {
    id: 12,
    category: "European Glory",
    question: "Vilket lag besegrade Liverpool i Champions League-finalen 1985 i Heysel?",
    options: ["Bayern Munich", "Juventus", "Real Madrid", "AC Milan"],
    correctAnswer: 1, // Juventus (1-0)
  },
  {
    id: 13,
    category: "Boot Room",
    question: "Vem av dessa var INTE en del av den legendariska 'Boot Room'-eran?",
    options: ["Bob Paisley", "Joe Fagan", "Ronnie Moran", "Rafael Benítez"],
    correctAnswer: 3, // Rafael Benítez (kom 2004)
  },
  {
    id: 14,
    category: "Legends",
    question: "Vilket smeknamn hade Liverpool-legenden Jamie Carragher?",
    options: ["Carra", "The Wall", "Bootle Beckenbauer", "Iron Man"],
    correctAnswer: 0, // Carra
  },
  {
    id: 15,
    category: "Historic Moments",
    question: "Hur många Premier League-matcher gick Liverpool utan förlust säsongen 2019/20?",
    options: ["27", "29", "31", "33"],
    correctAnswer: 0, // 27 matcher i rad
  },
];

// Funktion för att hämta alla frågor
export function getAllQuestions() {
  return questions;
}

//  Funktion för att hämta frågor efter kategori
export function getQuestionsByCategory(category) {
  return questions.filter((q) => q.category === category);
}

//  Funktion för att hämta alla kategorier
export function getCategories() {
  const categories = questions.map((q) => q.category);
  return [...new Set(categories)]; // Ta bort dubletter
}