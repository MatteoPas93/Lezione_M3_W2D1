const music = [
  {
    titolo: "Alba",
    durata: "3 min",
  },
  {
    titolo: "Vieni nel mio cuore",
    durata: "3 min",
  },
  {
    titolo: "Amare",
    durata: "3 min",
  },
  {
    titolo: "La pioggia di Londra",
    durata: "3 min",
  },
  {
    titolo: "Le solite paure",
    durata: "3 min",
  },
  { titolo: "Nuvole in testa", 
    durata: "3 min" 
  },
  { titolo: "Sono pazzo di te", 
    durata: "3 min" 
  },
  { titolo: "Tu", 
    durata: "3 min" 
  },
  { titolo: "Joker", 
    durata: "3 min" 
  },
  { titolo: "Ti va di stare bene", 
    durata: "3 min" 
  },
  { titolo: "Tutto diventa normale", 
    durata: "3 min" 
  },
  { titolo: "Vivo per vivere", 
    durata: "3 min" 
  },
  { titolo: "Tornare a te", 
    durata: "3 min" 
  },
  { titolo: "Titoli di coda", 
    durata: "3 min" 
  },
];


const albaCards = document.querySelector(".card__alba")




const cards = function() {
    
    for (let i = 0; i < music.length; i++) {
        albaCards.innerHTML += `
        <div class="card__col d-flex col-5 col-md-4 col-lg-3 justify-content-center">
        <div class="card d-flex align-items-center">
        <img src="./assets/alba.jpg"/>
        <h5> ${music[i].titolo}</h5>
        <p> ${music[i].durata} </p>
        <div> <button class="button__play">
        <a href"" class="link"> Play </a>
        </button>
        </div>
        </div>
        </div>`
        
    }
}

cards()