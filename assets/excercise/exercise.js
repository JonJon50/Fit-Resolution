let cardioBtn = document.getElementById("cardio-btn");
cardioBtn.addEventListener("click", cb1);
function cb1() {
  const options = {
    method: "GET",
    headers: {
      "X-RapidAPI-Key": "21a4844f08msh3a160f840f7c4dap1e8cbbjsn27ab3c79b460",
      "X-RapidAPI-Host": "exercisedb.p.rapidapi.com",
    },
  };

  fetch("https://exercisedb.p.rapidapi.com/exercises/bodyPart/cardio", options)
    .then((response) => response.json())
    .then((response) => {
      console.log(response);
      let buttonDiv = document.getElementById("button-div");
      buttonDiv.setAttribute("class", "hide");
      let gifDiv = document.getElementById("gifDiv");
      gifDiv.innerHTML = "";
      for (let i = 0; i < response.length; i++) {
        if (response[i].equipment === "body weight") {
          let imgEl = document.createElement("img");
          imgEl.src = response[i].gifUrl;
          imgEl.alt = "";
          gifDiv.append(imgEl);
        }
      }
      // img1El.src = response[0].gifUrl;
    })
    .catch((err) => console.error(err));
}
