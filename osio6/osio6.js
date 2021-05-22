/*
 * By Yaphi Berhanu, James Hibbard
 * February 11, 2020
 * https://www.sitepoint.com/simple-javascript-quiz/
 * 
 */

const myQuestions = [
  {
    question: "Mitä tarkoittaa vihapuhe?",
    answers: {
      a: "Todenmukaista, mutta yksityisten ja yksilöä vahingoittavan tiedon julkaisua.",
      b: "Mitä tahansa vihaista tunnepurkausta sosiaalisessa mediassa.",
      c: "Viestintää, joka levittää tai lietsoo vihaa yhtä ihmistä tai ihmisryhmää vastaan.",
      d: "Rikolliseksi epäilyttävän tai haitallisen toiminnan ilmoittamista viranomaisille."
    },
    correctAnswer: "c"
  },
  {
    question: "Mikä seuraavista viesteistä voitaisiin laskea vihapuheeksi?",
    answers: {
      a: '"Mä oon jo niin vitun väsynyt tähän suvakkien maahanmuuttajien ylisuojeluun."',
      b: '"Se on ihan vitun urpoa, että jotkut poliitikot saa lausua julkisesti rasistisia kommentteja.',
      c: '"Oot kyl aika seksikäs vaikka ootki vasta 12. Mitä jos tulisit joskus mun luo Kallioon käymään?"',
      d: '"Nää vitun mannet on ihan perseestä! Vitun spedet ei osaa käyttäytyä ja hakkaavatki naisiaan."'
    },
    correctAnswer: "d"
  },
  {
    question: "Mitä EI kannata tehdä, jos sinuun kohdistuu vihapuhetta sosiaalisessa mediassa?",
    answers: {
      a: "Poista vihapuhetta sisältävät aineistot ja blokkaa käyttäjä.",
      b: "Tee rikosilmoitus, vaikka et ole varma, onko kyse rangaistavasta vihapuheesta.",
      c: "Ota yhteyttä poliisiin mahdollisimman pian.",
      d: "Ilmoita sivuston ylläpitäjälle, että sivustolla on vihapuhetta."
    },
    correctAnswer: "a"
  },
  {
    question: "Mikä tarkoittaa netiketti?",
    answers: {
      a: "Häirinnän ilmiantoa ylläpitäjille sosiaalisen median palveluissa.",
      b: "Mikä tahansa laki, joka pätee netissä ja oikeassa elämässä.",
      c: "Hyviä ja asiallisia käyttäytymistapoja netin sosiaalisissa palveluissa.",
      d: "Mitä tahansa henkilöstä kerättyä dataa sosiaalisessa mediassa."
    },
    correctAnswer: "c"
  },
  {
    question: "Mikä seuraavista väittämistä EI pidä paikkansa?",
    answers: {
      a: "Netiketti kehottaa käyttämään verkossa asiallista kieltä.",
      b: "Kun julkaiset jotain netissä, sitä on vaikea ellei jopa mahdotonta poistaa.",
      c: "Muiden omaisuuden ja tekijänoikeuksien kunnioittaminen ovat myös osa netikettiä.",
      d: "Netin sosiaalisilla sivustoilla ei ole omia sääntöjä, vaan niiden pitää noudattaan EU:n netikettilakeja."
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
  var suoritus6 = localStorage.getItem("suoritus6");
  if (suoritus6 == 1) {
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
    localStorage.setItem("suoritus6", 1);
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
    localStorage.setItem("hylatty6", currentTime);
    
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
  const prevAccepted = localStorage.getItem("hylatty6");
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
      let htmlAika = new Date(parseInt(localStorage.getItem('hylatty6')));
      h = (htmlAika.getHours()<10?'0':'') + (htmlAika.getHours() + 1),
      m = (htmlAika.getMinutes()<10?'0':'') + htmlAika.getMinutes();
      document.getElementById("countdown").innerHTML = "Yritä uudelleen klo " + h + " : " + m;
    }
}