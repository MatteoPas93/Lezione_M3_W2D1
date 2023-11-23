const music = [
    {
      titolo: "Buongiorno vita",
      
      
      
      
      
      
      
      
      
      
      
      
      durata: "3 min",
    },
    {
      titolo: "Quel filo che ci unisce",
      durata: "3 min",
    },
    {
      titolo: "Niente",
      durata: "3 min",
    },
    {
      titolo: "Non amo",
      durata: "3 min",
    },
    {
      titolo: "Sul finale",
      durata: "3 min",
    },
    { titolo: "22 settembre",
      durata: "3 min" 
    },
    { titolo: "Equilibrio mentale",
      durata: "3 min" 
    },
    { titolo: "Supereroi",
      durata: "3 min" 
    },
    { titolo:  "7+3",
      durata: "3 min" 
    },
    { titolo:  "Non sapere mai dove si va", 
      durata: "3 min" 
    },
    { titolo:  "Il bambino che contava le stelle",
      durata: "3 min" 
    },
    { titolo:  "Solo",
      durata: "3 min" 
    },
    { titolo: "Spari sul petto",
      durata: "3 min" 
    },
    { titolo: "La finestra di greta",
      durata: "3 min" 
    },
    {
     titolo: "2:43 AM", 
     durata: "3 min",
    },
    {
      titolo: "Tutto questo sei tu",
      durata: "3 min", 
    },
    {
     titolo: "Isolamento",
     durata: "3 min",
    },
    {
     titolo: "Quei ragazzi",
     durata: "3 min",
    },
  ];
  
  
  const soloCards = document.querySelector(".card__solo")
  
  
  
  
  const cards = function() {
      
      for (let i = 0; i < music.length; i++) {
          soloCards.innerHTML += `
          <div class="card__col  d-flex col-5 col-md-4 col-lg-3 justify-content-center">
          <div class="card cards__css d-flex align-items-center">
          <img src="./assets/solo.jpg"/>
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