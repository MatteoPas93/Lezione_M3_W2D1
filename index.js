const music = [
  {
    titolo: "Alba",
    img: "./assets/alba.jpg",
    artista: "Ultimo",
    durata: "47 min 40 sec",
    brani: [
      "Alba",
      "Vieni nel mio cuore",
      "Amare",
      "La pioggia di Londra",
      "Le solite paure",
      "Nuvole in testa",
      "Sono pazzo di te",
      "Tu",
      "Joker",
      "Ti va di stare bene",
      "Tutto diventa normale",
      "Vivo per vivere",
      "Tornare a te",
      "Titoli di coda",
    ],
    link: "./alba.html",
  },
  {
    titolo: "Solo",
    img: "./assets/solo.jpg",
    artista: "Ultimo",
    durata: "58 min 39 sec",
    brani: [
      "Buongiorno vita",
      "Quel filo che ci unisce",
      "Niente",
      "Non amo",
      "Sul finale",
      "22 settembre",
      "Equilibrio mentale",
      "Supereroi",
      "7+3",
      "Non sapere mai dove si va",
      "La finestra di greta",
      "2:43 AM",
      "Tutto questo sei tu",
      "Isolamento",
      "Quei ragazzi",
      "Spari sul petto",
      "Solo",
      "Il bambino che contava le stelle",
    ],
    link: "./solo.html",
  },
  {
    titolo: "Pianeti",
    img: "./assets/pianeti.jpg",
    artista: "Ultimo",
    durata: "50 min 40 sec",
    brani: [
      "Pianeti",
      "Il capolavoro",
      "Giusy",
      "L'eleganza delle stelle",
      "Chiave",
      "Racconterò di te",
      "Wendy",
      "Sogni appesi",
      "Stasera",
      "Mille universi",
      "L'unica forza che ho",
      "La storia di un uomo",
      "Sabbia",
      "Ovunque tu sia",
    ],
    link: "./pianeti.html",
  },
  {
    titolo: "Peter Pan",
    img: "./assets/pan.jpg",
    artista: "Ultimo",
    durata: "56 min 56 sec",
    brani: [
      "Il vaso",
      "Poesia senza veli",
      "Dove il mare finisce",
      "Forse dormirai",
      "Canzone stupida",
      "Buon viaggio",
      "Cascare nei tuoi occhi",
      "La stella più fragile dell'universo",
      "Domenica",
      "Vorrei soltanto amarti",
      "Peter Pan (vuoi volare con me?)",
      "Ti dedico il silenzio",
      "Farfalla bianca",
      "Le stesse cose che facevo con te",
      "Il ballo delle incertezze",
      "La casa di un poeta",
    ],
    link: "./pan.html",
  },
];

const cardContainer = document.querySelector(".card__container");

const cards = function () {
  for (let i = 0; i < music.length; i++) {
    cardContainer.innerHTML += `<div class="card d-flex align-items-center col-12 col-sm-6 col-md-4 col-lg-2 wrap">
    <img src="${music[i].img}"/>
    <h5> ${music[i].titolo} </h5>
    <p> ${music[i].artista} </p>
    <p> ${music[i].durata} </p>
    <button class="card__button"> 
    <a href="${music[i].link}" class="link"> Vai ai brani
     </a> 
     </button>
    </div>`;
  }
};

cards();

// const cardSolo = document.querySelector(".card__solo")
// let arraySolo = music[i].brani



// const soloCards = function() {
    
//     for (let i = 0; i < arraySolo.length; i++) {
//         cardSolo.innerHTML += `
//         <div class="card__col d-flex col-5 col-md-4 col-lg-3 justify-content-center">
//         <div class="card d-flex align-items-center">
//         <img src="./assets/solo.jpg"/>
//         <h5> ${arraySolo[i]}</h5>
        
//         </div>
//         </div>`
        
//     }
// }

// soloCards()
