let cardioBtn = document.getElementById("cardio-btn");
cardioBtn.addEventListener("click", CardioWorkout);
function CardioWorkout() {
  const options = {
    method: "GET",
    headers: {
      "X-RapidAPI-Key": "26940ef294msh2535bc45fda35b3p1d56e3jsn39166a0fdd24",
      "X-RapidAPI-Host": "exercisedb.p.rapidapi.com",
    },
  };

  fetch("https://exercisedb.p.rapidapi.com/exercises/bodyPart/cardio", options)
    .then((response) => response.json())
    .then((response) => {
      console.log(response);
      let buttonDiv = document.getElementById("button-div");
      buttonDiv.setAttribute("class", "hide");
      // let gifDiv = document.getElementById("gifDiv");

      for (let i = 0; i < response.length; i++) {
        if (response[i].equipment === "body weight") {
          var cardDiv = document.createElement("div");
          cardDiv.setAttribute("class", "column is-one-third is-half-mobile");
          let imgEl = document.createElement("img");
          imgEl.src = response[i].gifUrl;
          imgEl.alt = "";
          let cardioCard = `

          <div class="column">
          <div class="box">
            <figure class="image is-64x64 is-half">
              <img src= ${imgEl.src} ${imgEl.alt}/>
            </figure>
          
                <p>${response[i].name}</p>
            </div>
          </div>`;

          cardDiv.innerHTML = cardioCard;
          document.querySelector("#gifDiv").appendChild(cardDiv);
        }
      }
    })
    .catch((err) => console.error(err));
}

let waistBtn = document.getElementById("waist-btn");
waistBtn.addEventListener("click", WaistWorkout);
function WaistWorkout() {
  const options = {
    method: "GET",
    headers: {
      "X-RapidAPI-Key": "26940ef294msh2535bc45fda35b3p1d56e3jsn39166a0fdd24",
      "X-RapidAPI-Host": "exercisedb.p.rapidapi.com",
    },
  };

  fetch("https://exercisedb.p.rapidapi.com/exercises/bodyPart/waist", options)
    .then((response) => response.json())
    .then((response) => {
      console.log(response);
      let buttonDiv = document.getElementById("button-div");
      buttonDiv.setAttribute("class", "hide");
      // let gifDiv = document.getElementById("gifDiv");

      for (let i = 0; i < response.length; i++) {
        if (response[i].equipment === "body weight") {
          var cardDiv = document.createElement("div");
          cardDiv.setAttribute("class", "column is-one-third is-half-mobile");
          let imgEl = document.createElement("img");
          imgEl.src = response[i].gifUrl;
          imgEl.alt = "";
          let cardioCard = `

          <div class="column">
          <div class="box">
            <figure class="image is-64x64 is-half">
              <img src= ${imgEl.src} ${imgEl.alt}/>
            </figure>
          
                <p>${response[i].name}</p>
            </div>
          </div>`;

          cardDiv.innerHTML = cardioCard;
          document.querySelector("#gifDiv").appendChild(cardDiv);
        }
      }
    })
    .catch((err) => console.error(err));
}

let chestBtn = document.getElementById("chest-btn");
chestBtn.addEventListener("click", ChestWorkout);
function ChestWorkout() {
  const options = {
    method: "GET",
    headers: {
      "X-RapidAPI-Key": "26940ef294msh2535bc45fda35b3p1d56e3jsn39166a0fdd24",
      "X-RapidAPI-Host": "exercisedb.p.rapidapi.com",
    },
  };

  fetch("https://exercisedb.p.rapidapi.com/exercises/bodyPart/chest", options)
    .then((response) => response.json())
    .then((response) => {
      console.log(response);
      let buttonDiv = document.getElementById("button-div");
      buttonDiv.setAttribute("class", "hide");
      // let gifDiv = document.getElementById("gifDiv");

      for (let i = 0; i < response.length; i++) {
        if (response[i].equipment === "body weight") {
          var cardDiv = document.createElement("div");
          cardDiv.setAttribute("class", "column is-one-third is-half-mobile");
          let imgEl = document.createElement("img");
          imgEl.src = response[i].gifUrl;
          imgEl.alt = "";
          let cardioCard = `

          <div class="column">
          <div class="box">
            <figure class="image is-64x64 is-half">
              <img src= ${imgEl.src} ${imgEl.alt}/>
            </figure>
          
                <p>${response[i].name}</p>
            </div>
          </div>`;

          cardDiv.innerHTML = cardioCard;
          document.querySelector("#gifDiv").appendChild(cardDiv);
        }
      }
    })
    .catch((err) => console.error(err));
}

let backBtn = document.getElementById("back-btn");
backBtn.addEventListener("click", BackWorkout);
function BackWorkout() {
  const options = {
    method: "GET",
    headers: {
      "X-RapidAPI-Key": "26940ef294msh2535bc45fda35b3p1d56e3jsn39166a0fdd24",
      "X-RapidAPI-Host": "exercisedb.p.rapidapi.com",
    },
  };

  fetch("https://exercisedb.p.rapidapi.com/exercises/bodyPart/back", options)
    .then((response) => response.json())
    .then((response) => {
      console.log(response);
      let buttonDiv = document.getElementById("button-div");
      buttonDiv.setAttribute("class", "hide");
      // let gifDiv = document.getElementById("gifDiv");

      for (let i = 0; i < response.length; i++) {
        if (response[i].equipment === "body weight") {
          var cardDiv = document.createElement("div");
          cardDiv.setAttribute("class", "column is-one-third is-half-mobile");
          let imgEl = document.createElement("img");
          imgEl.src = response[i].gifUrl;
          imgEl.alt = "";
          let cardioCard = `

          <div class="column">
          <div class="box">
            <figure class="image is-64x64 is-half">
              <img src= ${imgEl.src} ${imgEl.alt}/>
            </figure>
          
                <p>${response[i].name}</p>
            </div>
          </div>`;

          cardDiv.innerHTML = cardioCard;
          document.querySelector("#gifDiv").appendChild(cardDiv);
        }
      }
    })
    .catch((err) => console.error(err));
}

let legsBtn = document.getElementById("legs-btn");
legsBtn.addEventListener("click", LegWorkout);
function LegWorkout() {
  const options = {
    method: "GET",
    headers: {
      "X-RapidAPI-Key": "26940ef294msh2535bc45fda35b3p1d56e3jsn39166a0fdd24",
      "X-RapidAPI-Host": "exercisedb.p.rapidapi.com",
    },
  };

  fetch(
    "https://exercisedb.p.rapidapi.com/exercises/bodyPart/upper%20legs",
    options
  )
    .then((response) => response.json())
    .then((response) => {
      console.log(response);
      let buttonDiv = document.getElementById("button-div");
      buttonDiv.setAttribute("class", "hide");
      // let gifDiv = document.getElementById("gifDiv");

      for (let i = 0; i < response.length; i++) {
        if (response[i].equipment === "body weight") {
          var cardDiv = document.createElement("div");
          cardDiv.setAttribute("class", "column is-one-third is-half-mobile");
          let imgEl = document.createElement("img");
          imgEl.src = response[i].gifUrl;
          imgEl.alt = "";
          let cardioCard = `

          <div class="column">
          <div class="box">
            <figure class="image is-64x64 is-half">
              <img src= ${imgEl.src} ${imgEl.alt}/>
            </figure>
          
                <p>${response[i].name}</p>
            </div>
          </div>`;

          cardDiv.innerHTML = cardioCard;
          document.querySelector("#gifDiv").appendChild(cardDiv);
        }
      }
    })
    .catch((err) => console.error(err));
}

let armsBtn = document.getElementById("arms-btn");
armsBtn.addEventListener("click", ArmsWorkout);
function ArmsWorkout() {
  const options = {
    method: "GET",
    headers: {
      "X-RapidAPI-Key": "26940ef294msh2535bc45fda35b3p1d56e3jsn39166a0fdd24",
      "X-RapidAPI-Host": "exercisedb.p.rapidapi.com",
    },
  };

  fetch(
    "https://exercisedb.p.rapidapi.com/exercises/bodyPart/upper%20arms",
    options
  )
    .then((response) => response.json())
    .then((response) => {
      console.log(response);
      let buttonDiv = document.getElementById("button-div");
      buttonDiv.setAttribute("class", "hide");
      // let gifDiv = document.getElementById("gifDiv");

      for (let i = 0; i < response.length; i++) {
        if (response[i].equipment === "body weight") {
          var cardDiv = document.createElement("div");
          cardDiv.setAttribute("class", "column is-one-third is-half-mobile");
          let imgEl = document.createElement("img");
          imgEl.src = response[i].gifUrl;
          imgEl.alt = "";
          let cardioCard = `

          <div class="column">
          <div class="box">
            <figure class="image is-64x64 is-half">
              <img src= ${imgEl.src} ${imgEl.alt}/>
            </figure>
          
                <p>${response[i].name}</p>
            </div>
          </div>`;

          cardDiv.innerHTML = cardioCard;
          document.querySelector("#gifDiv").appendChild(cardDiv);
        }
      }
    })
    .catch((err) => console.error(err));
}
