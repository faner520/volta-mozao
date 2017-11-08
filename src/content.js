var content = [
    {
        "day":"0",
        "photo":"images/day-0.jpg",
        "label":"Dia chuvoso no Aeroporto do Rio"
    },
    {
        "day":"1",
        "photo":"images/day-1.jpg",
        "label":"Foto: Noite em Madrid - Paroquia de San Manuel e San Benito"
    },
    {
        "day":"2",
        "photo":"images/day-2.jpg",
        "label":"Foto: Templo de Debod - Madrid"
    },
    {
        "day":"3",
        "photo":"images/day-3.jpg",
        "label":"Foto: Estación Santa Justa - Sevilla"
    },
    {
        "day":"4",
        "photo":"images/day-4.jpg",
        "label":"Foto: Gato brincando com mini drone - Niebla"
    },
    {
        "day":"5",
        "photo":"images/day-5.jpg",
        "label":"Foto: Navio no Canal Afonso XIII - Sevilla"
    },
    {
        "day":"6",
        "photo":"images/day-6.jpg",
        "label":"Foto: Las Setas - Sevilla"
    },
    {
        "day":"7",
        "photo":"images/day-7.jpg",
        "label":"Foto: Torre Schindler - Sevilla"
    },
    {
        "day": "8",
        "photo": "images/day-8.jpg",
        "label": "Foto: Terreno de Finca Real - Niebla"
    },
    {
        "day": "9",
        "photo": "images/day-9.jpg",
        "label": "Foto: El Muelle del Tinto - Huelva"
    },
    {
        "day": "10",
        "photo": "images/day-10.jpg",
        "label": "Foto: Entardecer numa rua qualquer - Huelva"
    },
    {
        "day": "11",
        "photo": "images/day-11.jpg",
        "label": "Foto: Puente Nuevo - Ronda"
    },
    {
        "day": "12",
        "photo": "images/day-12.jpg",
        "label": "Foto: El Tajo Gorge - Ronda"
    },
    {
        "day": "13",
        "photo": "images/day-13.jpg",
        "label": "Foto: Centre Pompidou - Malága"
    },
    {
        "day": "14",
        "photo": "images/day-14.jpg",
        "label": "Foto: Visto do Castillo de Gibraltar - Malága"
    },
    {
        "day": "15",
        "photo": "images/day-15.jpg",
        "label": "Foto: Muelle Uno - Malága"
    },
    {
        "day": "16",
        "photo": "images/day-16.jpg",
        "label": "Foto: Alhambra/Alcazar - Granada"
    }
]

// LET LAST ITEM INSERT IN CONTENT TO TRANSFORM THIS IN SELECTED LABEL AT HTML TEMPLATE
let lastItemContent = content.length - 1;

let actualToday = content.length;

// TRY IF YOUR BROWSER SUPPORT HTML TEMPLATE CHECKING THE "CONTENT" ATTRIBUTE AT TEMPLATE ELEMENT
if ('content' in document.createElement('template')) {

    var label = document.querySelector('#photoLabel'),
        p = label.content.querySelector('.label-photo');
        p.textContent = content[lastItemContent].label;

    document.querySelector('.label-photo').appendChild(p);


}
//IF HTML TEMPLATE IS NOT SUPORTED USE THIS
else{

    // ALTERNATIVE METHOD TO INSERT LABEL AT PAGE
    document.querySelector('.label-photo').textContent = content[lastItemContent].label;

}

// INSERT LAST NODE PHOTO VALUE IN BODY BACKGROUND
document.body.style.backgroundImage = "url("+content[lastItemContent].photo+")";

// REMOVE TEMPLATE FROM PAGE AFTER LOAD
function removeTemplate() {

    document.querySelector('template').remove();

}

window.onload = removeTemplate;