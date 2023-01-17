let cardioBtn = document.getElementById("cardio-btn");
cardioBtn.addEventListener("click", cb1);
function cb1() {
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
          let imgEl = document.createElement("img");
          imgEl.src = response[i].gifUrl;
          imgEl.alt = "";
          let cardioCard = `
<div class="card">
  <div class="card-image">
    <figure class="image is-4by3">
      <div> 
      <img src= ${imgEl.src} ${imgEl.alt} />
</div>
    </figure>
  </div>
      <div>
       <p>Body Part: ${response[i].bodyPart}</p>
        <p>Name: ${response[i].name}</p>
      </div>
    </div>
    <div>
    <p>Target area: ${response[i].target}</p>
    </div>
  </div>
</div>`;
          cardDiv.innerHTML = cardioCard;
          document.querySelector("#gifDiv").appendChild(cardDiv);
          // gifDiv.append(cardioCard);
        }
      }
      // img1El.src = response[0].gifUrl;
    })
    .catch((err) => console.error(err));
}
