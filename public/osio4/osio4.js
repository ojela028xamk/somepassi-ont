/*
 * By Yaphi Berhanu, James Hibbard
 * February 11, 2020
 * https://www.sitepoint.com/simple-javascript-quiz/
 * 
 */

const myQuestions = [
  {
    question: "Mikä seuraavista väittämistä EI pidä paikkansa?",
    answers: {
      a: "Stressi on aina haitallista.",
      b: "Mikä tahansa kielteinen tai myönteinen asia voi stressata.",
      c: "Stressitila voi aiheuttaa flunssakierteen.",
      d: "Pitkään jatkunut sttressi voi aiheuttaa masennusta."
    },
    correctAnswer: "a"
  },
  {
    question: "Mitä seuraavista EI kannata tehdä, kun stressiä hoidetaan?",
    answers: {
      a: "Harrasta rauhallisia asioita kuten musiikki ja taide.",
      b: "Juo paljon kahvia tai energiajuomaa.",
      c: "Mieti ja tiedosta stressin syyt.",
      d: "Puhu asiasta ystävälle tai ammattiauttajalle."
    },
    correctAnswer: "b"
  },
  {
    question: "Mitä tarkoittaa someniska?",
    answers: {
      a: "Menetelmä, jonka avulla voidaan ehkäistä niskakipua.",
      b: "Stressitilaa, joka aiheutuu someriippuvuudesta.",
      c: "Liiallista istumista tietokoneen ääressä.",
      d: "Eteenpäin kallistunutta pään asentoa, joka kuormittaa niskan rakenteita."
    },
    correctAnswer: "d"
  },
  {
    question: "Mitä EI kannata tehdä, kun someniskaa yritetään ehkäistä?",
    answers: {
      a: "Pidä pää mahdollisimman pystyssä, lähellä neutraaliasentoa.",
      b: "Somettaessasi vältä asennon vaihtoa koko ajan, jotta et kuormita koko kehoa.",
      c: "Tauota somettamista.",
      d: "Asenna some-ergonomiaa valvova sovellus."
    },
    correctAnswer: "b"
  },
  {
    question: "Mikä seuraavista väittämistä EI pidä paikkansa?",
    answers: {
      a: "Ajanhallinnalla voidaan minimoida stressin vaikutuksia.",
      b: "Liikuntaa voidaan käyttää stressin lievittämiseen.",
      c: "Pitkään jatkunut työskentely pää eteenpäin työntyneenä aiheuttaa verenkierron heikentymistä.",
      d: "Kuudenkymmenen asteen kulmassa pää rasittaa niskaa noin 5 kiloa."
    },
    correctAnswer: "d"
  }
];

(function(){
    function buildQuiz(){
      // variable to store the HTML output
      const output = [];
  
      // for each question...
      myQuestions.forEach(
        (currentQuestion, questionNumber) => {
  
          // variable to store the list of possible answers
          const answers = [];
  
          // and for each available answer...
          for(letter in currentQuestion.answers){
  
            // ...add an HTML radio button
            answers.push(
              `<label>
                <input type="radio" name="question${questionNumber}" value="${letter}">
                <p id="text">${currentQuestion.answers[letter]}</p>
              </label>`
            );
          }
  
          // add this question and its answers to the output
          output.push(
            `<div class="question"> ${currentQuestion.question} </div>
            <div class="answers"> ${answers.join('')} </div>`
          );
        }
      );
  
      // finally combine our output list into one string of HTML and put it on the page
      quizContainer.innerHTML = output.join('');
    }
  
    function showResults(){
  
      // gather answer containers from our quiz
      const answerContainers = quizContainer.querySelectorAll('.answers');
  
      // keep track of user's answers
      let numCorrect = 0;
  
      // for each question...
      myQuestions.forEach( (currentQuestion, questionNumber) => { 
        // find selected answer
        const answerContainer = answerContainers[questionNumber];
        const selector = `input[name=question${questionNumber}]:checked`;
        const userAnswer = (answerContainer.querySelector(selector) || {}).value; 
        // if answer is correct
        if(userAnswer === currentQuestion.correctAnswer){
          // add to the number of correct answers
          numCorrect++;   
        }
      });

      // Funktiot sen jälkeen, kun vastaukset on tarkistettu
      if (numCorrect > 3) {
        /*
        myQuestions.forEach( (currentQuestion, questionNumber) => { 

          const answerContainer = answerContainers[questionNumber];
          const selector = `input[name=question${questionNumber}]:checked`;
          const userAnswer = (answerContainer.querySelector(selector) || {}).value; 

          if(userAnswer === currentQuestion.correctAnswer){
            answerContainers[questionNumber].style.color = 'lightgreen';      
          } else {
            answerContainers[questionNumber].style.color = 'red';
          }
        }); */
        testiSuoritettu();
      } else {
        testiHylatty();
      }
  
      // show number of correct answers out of total
      /*
      resultsContainer.innerHTML = `${numCorrect} out of ${myQuestions.length}`;
      */
    }
  
    const quizContainer = document.getElementById('quiz');
    const resultsContainer = document.getElementById('results');
    const submitButton = document.getElementById('submit');

  
    // Kick things off
    buildQuiz();
  
    // Event listeners
    submitButton.addEventListener('click', showResults);

  })();

/*
 * By Jere Länsipii
 * 2021
 * 
 */

const submitButton = document.getElementById('submit');
const ilmoitusNappi = document.getElementById("ilmoitusNappi");
const suljeNappi = document.getElementById("suljeNappi");
const modal = document.getElementById("ilmoitusIkkuna");

function onkoSuoritettu() {
  // katsotaan onko osio jo suoritettu
  laskuri();
  var suoritus4 = localStorage.getItem("suoritus4");
  if (suoritus4 == 1) {
    hyvaksyttyIkkuna.style.display = "block";
    quiz.style.display = "none";
    ilmoitusNappi.style.display = "none";   
  }
}

function testiSuoritettu() {
    modal.style.display = "none";
    hyvaksyttyIkkuna.style.display = "block";
    quiz.style.display = "none";
    ilmoitusNappi.hidden = true;
    // LocalStorage
    if (typeof(Storage) !== "undefined") {
    // Store
    localStorage.setItem("suoritus4", 1);
    } else {
    console.log("Sorry, your browser does not support Web Storage...");
    }
};

function testiHylatty() {
    modal.style.display = "none";
    hylattyIkkuna.style.display = "block";
    // disabloi nappulat ja kysymysalue ja yritä myöhemmin uudelleen
    ilmoitusNappi.hidden = true;
    quiz.style.display = "none";
    // asetetaan "countdown"
    const currentTime = new Date().getTime();
    localStorage.setItem("hylatty4", currentTime);
    
};

ilmoitusNappi.onclick = function() {
  modal.style.display = "block";
}
suljeNappi.onclick = function() {
    modal.style.display = "none";
}
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}


function laskuri() {
  const expirationDuration = 1000 * 60 * 60 * 1; // 1 hour
  const prevAccepted = localStorage.getItem("hylatty4");
  const currentTime = new Date().getTime();
  const notAccepted = prevAccepted == undefined;
  const prevAcceptedExpired = prevAccepted != undefined && currentTime - prevAccepted > expirationDuration;
    if (notAccepted || prevAcceptedExpired) {
      countdown.style.display = "none";
      quiz.style.display = "block";
      ilmoitusNappi.hidden = false;
    } else {
      quiz.style.display = "none";
      ilmoitusNappi.hidden = true;
      countdown.style.display = "block";
      hylattyIkkuna.style.display = "block";
      let htmlAika = new Date(parseInt(localStorage.getItem('hylatty4')));
      h = (htmlAika.getHours()<10?'0':'') + (htmlAika.getHours() + 1),
      m = (htmlAika.getMinutes()<10?'0':'') + (htmlAika.getMinutes() + 1);
      document.getElementById("countdown").innerHTML = "Yritä uudelleen klo " + h + " : " + m;
    }
}