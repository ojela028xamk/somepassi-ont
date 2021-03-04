const submitButton = document.getElementById('submit');
const ilmoitusNappi = document.getElementById("ilmoitusNappi");
const suljeNappi = document.getElementById("suljeNappi");
const modal = document.getElementById("ilmoitusIkkuna");

function testiSuoritettu() {
    modal.style.display = "none";
    hyvaksyttyIkkuna.style.display = "block";
};

function testiHylatty() {
    modal.style.display = "none";
    hylattyIkkuna.style.display = "block";

    
    // disabloi nappulat ja kysymysalue ja yritä myöhemmin uudelleen
    submitButton.hidden = true;
    setTimeout(function(){submitButton.hidden = false;},5000);
    ilmoitusNappi.hidden = true;
    setTimeout(function(){ilmoitusNappi.hidden = false;},5000);
    quiz.style.display = "none";
    setTimeout(function(){quiz.style.display = "block";},5000);
    setTimeout(function(){hylattyIkkuna.style.display = "none";},5000);
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