const btnGenera = document.getElementById("btn-genera");
const numeroPartenza = document.getElementById("numero-partenza");
const listaNumeri = document.getElementById("lista-numeri");

btnGenera.addEventListener("click", generaNumeri);

function generaNumeri (e) {
    e.preventDefault();

    listaNumeri.innerHTML = "";

    let numeroDiPartenza = parseInt(numeroPartenza.value);

    for (i = numeroDiPartenza; i < (numeroDiPartenza + 100); i++) {
        var listItem = document.createElement("li");
         
        if (i === "0") {
            listItem.innerHTML = "0";
        } else if ((i % 3) === 0 && (i % 5) === 0) {
            listItem.innerHTML = "FizzBuzz";
        } else if ((i % 3) === 0) {
            listItem.innerHTML = "Fizz";
        } else if ((i % 5) === 0) {
            listItem.innerHTML = "Buzz";
        } else {
            listItem.innerHTML = i;
        }
        listaNumeri.appendChild(listItem);
    }
}