/*
 * By Yaphi Berhanu, James Hibbard
 * February 11, 2020
 * https://www.sitepoint.com/simple-javascript-quiz/
 * 
 */

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
                ${letter} :
                ${currentQuestion.answers[letter]}
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
        myQuestions.forEach( (currentQuestion, questionNumber) => { 

          const answerContainer = answerContainers[questionNumber];
          const selector = `input[name=question${questionNumber}]:checked`;
          const userAnswer = (answerContainer.querySelector(selector) || {}).value; 

          if(userAnswer === currentQuestion.correctAnswer){
            answerContainers[questionNumber].style.color = 'lightgreen';      
          } else {
            answerContainers[questionNumber].style.color = 'red';
          }
        });
        testiSuoritettu();
      } else {
        testiHylatty();
      }
  
      // show number of correct answers out of total
      resultsContainer.innerHTML = `${numCorrect} out of ${myQuestions.length}`;
    }
  
    const quizContainer = document.getElementById('quiz');
    const resultsContainer = document.getElementById('results');
    const submitButton = document.getElementById('submit');
    const myQuestions = [
        {
          question: "Mikä näistä sivustoista ei ole huijaussivusto?",
          answers: {
            a: "www.youtube.fi",
            b: "www72.youtube.com",
            c: "www.y0utube.com",
            d: "www.youtube.org"
          },
          correctAnswer: "a"
        },
        {
          question: "Haluat katsoa yhden suosikki elokuvistasi. Mitä kautta aiot elokuvan hankkia?",
          answers: {
            a: "Katsomalla elokuvan jostakin maksullisesta suoratoisto palvelusta.",
            b: "Lataamalla elokuvan torrent sivustolta tietokoneellesi.",
            c: "Katsomalla elokuvan nettisivulta, jonne on ladattu paljon elokuvia ilmaiseksi",
            d: "Lataamalla elokuvan ilmaiseksi internetistä."
          },
          correctAnswer: "a"
        },
        {
          question: "Tuntematon henkilö lähettää sinulle Instagramissa yksityisviestin. Mitä näistä viesteistä EI lasketa uhkailuksi?",
          answers: {
            a: "Lähetä rahaa mun tilille tai ilmiannan sun profiilin asiattomasta materiaalista.",
            b: "Lähetä mulle alastonkuvia itsestäsi tai kerron sun mutsille noista kuvista, jossa poltat röökiä.",
            c: "Anna mulle toi skini tos pelis tai mä tuun sun kotiovelle. Mä tiiän missä sä asut.",
            d: "Lähetä mulle ystäväpyyntö, mun mielestä sulla on upea profiili."
          },
          correctAnswer: "d"
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
          question: "Sähköpostiin saattaa välillä ilmestyä niin sanottua roskapostia. Mikä seuraavista vaihtoehdoista EI ole roskapostia?",
          answers: {
            a: "Hei, oletko kuullut tosta Big Money –verkkosivustosta? Meille tulee niiltä mailia kokoajan!",
            b: "Myynnissä uusi rikkapölynimuri nyt vain 29,99€. Saatavilla vain rajoitetun ajan!",
            c: "Olet voittanut lotossa 3 miljoona euroa! Lunasta voittasi vierailemalla sivulle https://bigmoneyboom.com/prizes"
          },
          correctAnswer: "a"
        }
      ];
  
    // Kick things off
    buildQuiz();
  
    // Event listeners
    submitButton.addEventListener('click', showResults);

  })();