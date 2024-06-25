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

// ICON-BOX-LINK
const iconsBox = document.querySelectorAll('.item-icon-container');
console.log("Contenuto all'interno della variabile: 'item-icon-container'" + iconsBox);
for (const iconBox of iconsBox)
    {
        iconBox.addEventListener('click', goToLink);
    }