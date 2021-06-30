/*
 * By Yaphi Berhanu, James Hibbard
 * February 11, 2020
 * https://www.sitepoint.com/simple-javascript-quiz/
 * 
 */

const myQuestions = [
  {
    question: "Tuntematon henkilö lähettää sinulle Instagramissa yksityisviestin. Mitä näistä viesteistä EI lasketa uhkailuksi?",
    answers: {
      a: '"Lähetä rahaa mun tilille tai ilmiannan sun profiilin asiattomasta materiaalista!"',
      b: '"Lähetä mulle alastonkuvia itsestäsi tai kerron sun mutsille noista kuvista, jossa poltat röökiä."',
      c: '"Anna mulle toi skini tos pelis tai mä tuun sun kotiovelle. Mä tiiän missä sä asut."',
      d: '"Lähetä mulle ystäväpyyntö, mun mielestä sulla on upea profiili."'
    },
    correctAnswer: "d"
  },
  {
    question: "Mitä sinun EI kannata tehdä, jos joudut nettikiusaamisen kohteeksi?",
    answers: {
      a: "Blokkaa viestit ja yhteydenotot kiusaajalta.",
      b: "Tallenna, kuvankaappaa tai printtaa pilkkaavat viestit, keskustelut ja kuvat.",
      c: "Vastaa kiusaamisviesteihin ja uhkaile kiusaajaa.",
      d: "Kerro kiusaamisesta esim. kavereille tai vanhemmille."
    },
    correctAnswer: "c"
  },
  {
    question: "Mitä tarkoitetaan termillä kunnianloukkaus?",
    answers: {
      a: "Sanallisesti tai aseen välityksellä tapahtuva toisen ihmisen henkeen kohdistuva tappouhkaus.",
      b: "Valheellisen tiedon levittämistä ihmisestä niin, että siitä aiheutuu hänelle haittaa.",
      c: "Rikos, johon syyllistyy henkilö, joka toistuvasti uhkaa, seuraa tai tarkkailee toista henkilöä.",
      d: "Henkilöön kohdistuva negatiivinen arvostelu tai kritiikki."
    },
    correctAnswer: "b"
  },
  {
    question: "Mikä näistä seuraavista EI ole nettikiusaamista.",
    answers: {
      a: "Toisen nimellä tai kuvalla esiintyminen.",
      b: "Toisen henkilön valokuvien manipulointi ja levittäminen.",
      c: "Toiseen henkilöön vahingossa kohdistunut fyysinen vaurio.",
      d: "Sanasodan tai riitatilanteiden aiheuttaminen tahallisesti."
    },
    correctAnswer: "c"
  },
  {
    question: "Mikä seuraavista väittämistä EI pidä paikkansa?",
    answers: {
      a: "Nettikiusaaminen ei aina täytä rikoksen merkkejä.",
      b: "Salaa kuvaaminen ja julkaisu voidaan laskea nettikiusaamiseksi.",
      c: "Mitä nopeammin hakee apua nettikiusaamista vastaan, sen parempi.",
      d: "Identiteettivarkaus on rikos, mutta sitä ei lasketa nettikiusaamiseksi."
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
  var suoritus3 = localStorage.getItem("suoritus3");
  if (suoritus3 == 1) {
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
    localStorage.setItem("suoritus3", 1);
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
    localStorage.setItem("hylatty3", currentTime);
    
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
  const prevAccepted = localStorage.getItem("hylatty3");
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
      let htmlAika = new Date(parseInt(localStorage.getItem('hylatty3')));
      h = (htmlAika.getHours()<10?'0':'') + (htmlAika.getHours() + 1),
      m = (htmlAika.getMinutes()<10?'0':'') + (htmlAika.getMinutes() + 1);
      document.getElementById("countdown").innerHTML = "Yritä uudelleen klo " + h + " : " + m;
    }
}