# ⚽ Liverpool FC Quiz

En interaktiv quiz-applikation som testar användarens kunskaper om Liverpool FC:s rika historia. Från grundandet 1892 till moderna Champions League-triumfer - hur mycket vet du egentligen om The Reds?


## 🎯 Om Projektet

Liverpool FC Quiz är en webbaserad applikation som innehåller 15 utmanande frågor om klubbens historia, legendariska spelare, trofér och minnes­värda ögonblick. Användaren får omedelbar feedback på sina svar och kan se sin slutliga poäng i procent.

### 🌟 Funktioner

- ✅ 15 handplockade frågor om Liverpool FC
- ✅ Omedelbar feedback (rätt/fel med visuell markering)
- ✅ Visa det korrekta svaret vid fel svar
- ✅ Progress-indikator (visar vilket fråga X av 15)
- ✅ Poängräkning i realtid
- ✅ Slutresultat med procent och feedbackmeddelande
- ✅ Omstartsfunktion för att spela igen
- ✅ Responsiv design (fungerar på mobil och desktop)
- ✅ Liverpool-tema med röda färger genomgående


## 📝 Reflektion (150-250 ord)

### Vad gick bra?

Projektet gick förvånansvärt smidigt tack vare den modulära strukturen. Genom att dela upp koden i separata moduler (`quiz.js`, `ui.js`, `questions.js`) blev det enkelt att arbeta med en del i taget utan att påverka resten. Tailwind CSS gjorde det snabbt att skapa en visuellt tilltalande design med Liverpool-tema. Att implementera funktionen som visar det rätta svaret vid fel svar var en användarvänlig förbättring som gjorde quizet mer lärorikt.

### Vad var svårt?

Den största utmaningen var att få alla moduler att kommunicera korrekt med varandra. Från början hade jag problem med att `Quiz.init()` inte hittades, vilket berodde på att jag hade glömt `export` nyckelordet framför funktionen. Event delegation för svarsalternativen var också lite knepigt att få rätt - jag behövde förstå hur `dataset.index` fungerar och hur man förhindrar dubbelklick med en `answered`-flagga. Att skicka rätt svar-index från `main.js` till `ui.js` krävde också en extra funktion (`getCurrentQuestion()`).

### Vad lärde jag mig?

Jag lärde mig vikten av ES6 modules och hur `import/export` fungerar i praktiken. Separation of Concerns-principen blev mycket tydligare - affärslogik, presentation och data ska vara separerade. Jag förstår nu bättre hur man bygger en state-driven applikation där ett centralt objekt (`state`) håller koll på all data. Tailwind CSS blev ett kraftfullt verktyg för snabb prototyping, och jag lärde mig hur utility-classes kan skapa konsekventa designs. Slutligen lärde jag mig att alltid testa i små steg och använda `console.log()` för debugging.

