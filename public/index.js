function naytaOhjeet() {
    ohjeet.style.display = "block";
    esittely.style.display = "none";
}
function naytaEsittely() {
    ohjeet.style.display = "none";
    esittely.style.display = "block";
}

var divsuoritus1 = localStorage.getItem("suoritus1");
var divsuoritus2 = localStorage.getItem("suoritus2");
var divsuoritus3 = localStorage.getItem("suoritus3");
var divsuoritus4 = localStorage.getItem("suoritus4");
var divsuoritus5 = localStorage.getItem("suoritus5");
var divsuoritus6 = localStorage.getItem("suoritus6");


if (divsuoritus1 == 1) {
    suoritettu1.style.display = "block";
} else {
    suoritettu1.style.display = "none";
}

if (divsuoritus2 == 1) {
    suoritettu2.style.display = "block";
} else {
    suoritettu2.style.display = "none";
}

if (divsuoritus3 == 1) {
    suoritettu3.style.display = "block";
} else {
    suoritettu3.style.display = "none";
}

if (divsuoritus4 == 1) {
    suoritettu4.style.display = "block";
} else {
    suoritettu4.style.display = "none";
}

if (divsuoritus5 == 1) {
    suoritettu5.style.display = "block";
} else {
    suoritettu5.style.display = "none";
}

if (divsuoritus6 == 1) {
    suoritettu6.style.display = "block";
} else {
    suoritettu6.style.display = "none";
}