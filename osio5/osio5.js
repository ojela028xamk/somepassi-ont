/*
 * By Yaphi Berhanu, James Hibbard
 * February 11, 2020
 * https://www.sitepoint.com/simple-javascript-quiz/
 * 
 */

const myQuestions = [
  {
    question: "Haluat katsoa yhden suosikkielokuvistasi. Mitä kautta aiot elokuvan hankkia?",
    answers: {
      a: "Katsomalla elokuvan jostakin maksullisesta suoratoisto palvelusta.",
      b: "Lataamalla elokuvan torrent sivustolta tietokoneellesi.",
      c: "Katsomalla elokuvan nettisivulta, jonne on ladattu paljon elokuvia ilmaiseksi.",
      d: "Lataamalla elokuvan ilmaiseksi internetistä."
    },
    correctAnswer: "a"
  },
  {
    question: "Haluat kuunnelle kuunnella yhden suosikkikappaleistasi. Mitä näistä palveluista käytät biisin löytämiseen?",
    answers: {
      a: "Etsit kappaleen Spotifysta ja kuuntelet sen sieltä.",
      b: "Haluat ladata kappaleen tietokoneellesi, joten etsit ja lataat kappaleen sivustolta, josta voi ladata YouTube videoita koneellesi.",
      c: "Etsit kappaleen SoundCloudista, johon sen on ladannut joku epävirallinen tuntematon käyttäjä, ja kuuntelet sen sieltä.",
      d: "Haluat ladata kappaleen tietokoneellesi, joten etsit ja lataat kappaleen torrent sivustolta."
    },
    correctAnswer: "a"
  },
  {
    question: "Internetissä ei saa julkaista tekijänoikeuslain vastaisia materiaaleja. Mikä näistä vaihtoehdoista NOUDATTAA tekijänoikeuslakia?",
    answers: {
      a: "Kopioit runokirjasta runon ja postaat sen omalla nimelläsi Facebook-seinällesi.",
      b: "Lataat lempi bändistäsi puhuvan vlogin YouTube kanavallesi.",
      c: "Lataat lempi bändisi kaupallisesti myydyn kappaleen YouTube kanavallesi.",
      d: "Jaat torrent-ohjelmalla lempi elokuvasi muiden katsottavaksi."
    },
    correctAnswer: "b"
  },
  {
    question: "Kuinka kauan tekijänoikeus on voimassa?",
    answers: {
      a: "Tekijän eliniän ajan.",
      b: "Tekijän eliniän ja 70 vuotta hänen kuolinvuotensa päättymisestä.",
      c: "50 vuotta tekijän kuolinvuoden päättymisestä.",
      d: "Seuraavat 100 vuotta tekijänoikeuden luonnin jälkeen."
    },
    correctAnswer: "b"
  },
  {
    question: "Mikä seuraavista väittämistä pitää paikkansa?",
    answers: {
      a: "Jos teoksen tekijä on alaikäinen, hän ei saa tekijänoikeutta.",
      b: "Tekijänoikeuden syntyminen edellyttää teosten rekisteröintiä.",
      c: "Tekijänoikeus suojaa teoksen ulkomuotoa ja ilmaisutapaa, mutta se ei suojaa teoksen ideaa, tietoa, teoriaa tai periaatetta.",
      d: "Vaikka teoksella olisi monta tekijää, teoksen käyttöön ei tarvita lupaa jokaiselta tekijältä."
    },
    correctAnswer: "c"
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
  var suoritus5 = localStorage.getItem("suoritus5");
  if (suoritus5 == 1) {
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
    localStorage.setItem("suoritus5", 1);
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
    localStorage.setItem("hylatty5", currentTime);
    
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
  const prevAccepted = localStorage.getItem("hylatty5");
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
      let htmlAika = new Date(parseInt(localStorage.getItem('hylatty5')));
      h = (htmlAika.getHours()<10?'0':'') + (htmlAika.getHours() + 1),
      m = (htmlAika.getMinutes()<10?'0':'') + htmlAika.getMinutes();
      document.getElementById("countdown").innerHTML = "Yritä uudelleen klo " + h + " : " + m;
    }
}