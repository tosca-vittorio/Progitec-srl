const RIGHT_ARROW = 'https://s3-us-west-2.amazonaws.com/s.cdpn.io/1083533/forward-arrow.png';
const DOWN_ARROW = 'https://s3-us-west-2.amazonaws.com/s.cdpn.io/1083533/down-arrow.png';

function goToLink(event)
{
    console.log(event);

    // recupero il div che ha generato l'evento
    var div = event.currentTarget;
    console.log("EVENTO GENERATO DA: " + div);

    // recupero gli attributi data-*
    var url = div.getAttribute("data-url");
    var type = div.getAttribute("data-type");

    // eseguo il corretto reindirizzamento a file o pagine web
    if(type === "pdf" || type === "page")
        {
            window.location.href = url;
        }
    else
        {
            console.log("TIPO: " + type + "\nNON SUPPORTATO");
        }
}

function toggle(event) 
{
    const arrowContainer = event.currentTarget;
    const main = arrowContainer.closest('.first-info-box, .second-info-box, .third-info-box'); // Trova l'elemento principale corrispondente
    const image = arrowContainer.querySelector('img'); // Seleziona l'immagine all'interno di arrowContainer

    if (currentMain !== main) 
    {
        // Chiudi i dettagli dell'elemento principale attualmente aperto se è diverso dall'attuale
        if (currentMain) 
        {
            currentMain.querySelector('.dettagli').classList.add('hidden');
            currentMain.querySelector('img').src = "IMG/PROVA/arrow-down.jpg"; // Cambia il percorso dell'immagine in base allo stato dei dettagli
        }
        currentMain = main; // Imposta l'elemento principale attualmente aperto a quello attuale
    }

    const dettagli = main.querySelector('.dettagli'); // Seleziona i dettagli dell'elemento principale attuale
    dettagli.classList.toggle('hidden'); // Toggle sulla classe hidden per mostrare/nascondere i dettagli

    // Aggiorna l'icona dell'icona della freccia in base allo stato dei dettagli
    image.src = dettagli.classList.contains('hidden') ? "IMG/PROVA/arrow-down.jpg" : "IMG/PROVA/arrow-up.jpg";
}


// MAIN 

//MOSTRA DETTAGLI
let isVisible = false;
let currentMain = null; // Variabile per tenere traccia dell'elemento principale attualmente aperto

console.log(document);
//const detailToggle = document.querySelector('.show-details');
const dettagli = document.querySelectorAll('.arrow-container');

for(const dettaglio of dettagli)
{
  dettaglio.addEventListener('click', toggle);
}

// ICON-BOX-LINK
const iconsBox = document.querySelectorAll('.icon-box');
console.log("Contenuto all'interno della variabile: 'iconBox'" + iconsBox);
for (const iconBox of iconsBox)
    {
        iconBox.addEventListener('click', goToLink);
    }


// FUNZIONALITA' BOTTONI
const buttons = document.querySelectorAll(".styled-button");
for (const button of buttons)
    {
        button.addEventListener('click', goToLink);
    }