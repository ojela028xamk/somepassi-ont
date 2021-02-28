const submitButton = document.getElementById('submit');

function testiSuoritettu() {
    console.log("suoritettu");
};

function testiHylatty() {
    console.log("hylätty");
    submitButton.hidden = true;
    setTimeout(function(){submitButton.hidden = false;},5000);
};