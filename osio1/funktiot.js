const submitButton = document.getElementById('submit');
const ilmoitusNappi = document.getElementById("ilmoitusNappi");
const suljeNappi = document.getElementById("suljeNappi");
const modal = document.getElementById("ilmoitusIkkuna");

function testiSuoritettu() {
    modal.style.display = "none";
    console.log("suoritettu");
};

function testiHylatty() {
    modal.style.display = "none";
    console.log("hylätty");
    submitButton.hidden = true;
    setTimeout(function(){submitButton.hidden = false;},5000);
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