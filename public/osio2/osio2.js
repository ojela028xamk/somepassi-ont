/*
 * By Yaphi Berhanu, James Hibbard
 * February 11, 2020
 * https://www.sitepoint.com/simple-javascript-quiz/
 * 
 */

const myQuestions = [
  {
    question: "Grooming-ilmiöllä tarkoitetaan internetissä alkavaa nuoren seksuaalista hyväksikäyttöä ja sen valmistelua. Mikä seuraavista viesteistä EI millään tavoin ole groomausta?",
    answers: {
      a: '"Menetkö siis saunaan ihan alasti?"',
      b: '"Ootko ikinä miettiny millaista SE olis vanhemman ihmisen kanssa?"',
      c: '"Mitä vaatteita ostit?"',
      d: '"Mitä sulla on nyt päälläs?"'
    },
    correctAnswer: "c"
  },
  {
    question: "Ystäväsi lähettää viestin hänen oikeasta sähköposti osoitteestaan. Mikä näistä viesteistä on oikeasti ystäväsi kirjoittama?",
    answers: {
      a: '"Hei, olen tulossa käymään kotipaikkakunnallasi ensi viikolla. Ehtisimmekö mahdollisesti tavata?"',
      b: '"Hei! Tsekkaa tämä löytämäni siisti nettisaitti, josta voi tilata ilmaiseksi puhelimia! [linkki sivustoon]"',
      c: '"Hei hyvä ystävä, huonoja uutisia. Minun tililtäni on ryöstetty rahaa ja tarvitsen apuasi. Voisitko lähettää rahaa tähän tiliin? [tilinumero]."',
      d: '"Hei. Minä haluaisin katsoa Netflixiä, mutta en muista tunnuksiani. Voisitko lainata sinun tunnuksiasi minulle?"'
    },
    correctAnswer: "a"
  },
  {
    question: "Tutustut internetissä uuteen henkilöön. Mitä näistä viesteistä ON järkevää lähettää hänelle?",
    answers: {
      a: '"Nii mietin et voitas vaikka nähä sit tiistaina mieluummin ku sillon ei oo koulua."',
      b: '"Mun mielestä poliitikot vois ottaa vastuuta teoistaan vai mitä mieltä oot?"',
      c: '"Mä asun siis siinä Möysän S-marketin takana. Miks kysyt?"',
      d: '"Voin antaa mun katuosoitteen, niin voit tulla vierailemaan."'
    },
    correctAnswer: "b"
  },
  {
    question: "Mitä hyvä ja vahva salasana sisältää?",
    answers: {
      a: "Pelkkiä numeroita",
      b: "Joukko kirjaimia, erikoismerkkejä ja numeroita, joista ei synny selkeitä sanoja.",
      c: "Pelkkiä kirjaimia ja erikoismerkkejä.",
      d: "Joukko kirjaimia, erikoismerkkejä ja numeroita, joista syntyy selkeitä sanoja."
    },
    correctAnswer: "b"
  },
  {
    question: "Jos nuori on seksuaalisen hyväksikäytön uhri, mitä hänen EI kannata tehdä?",
    answers: {
      a: "Ottaa viestit, kuvat ym. talteen ja soittaa poliisille.",
      b: "Uhkailla hyväksikäyttäjää niin, että nuori aikoo soittaa poliisille.",
      c: "Kertoa vanhemmalle tai muulle luotettavalle aikuiselle, mitä on tapahtunut.",
      d: "Kertoa opettajalle, mitä on tapahtunut."
    },
    correctAnswer: "b"
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
  var suoritus2 = localStorage.getItem("suoritus2");
  if (suoritus2 == 1) {
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
    localStorage.setItem("suoritus2", 1);
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
    localStorage.setItem("hylatty2", currentTime);
    
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
  const prevAccepted = localStorage.getItem("hylatty2");
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
      let htmlAika = new Date(parseInt(localStorage.getItem('hylatty2')));
      h = (htmlAika.getHours()<10?'0':'') + (htmlAika.getHours() + 1),
      m = (htmlAika.getMinutes()<10?'0':'') + (htmlAika.getMinutes() + 1);
      document.getElementById("countdown").innerHTML = "Yritä uudelleen klo " + h + " : " + m;
    }
}