const options = {
  method: "GET",
  headers: {
    "X-RapidAPI-Key": "703108b090msh27077d063d9be74p1aa05fjsn24b5c1ff9053",
    "X-RapidAPI-Host": "exercisedb.p.rapidapi.com",
  },
};

fetch("https://exercisedb.p.rapidapi.com/exercises/exercise/%7Bid%7D", options)
  .then((response) => response.json())
  .then((response) => console.log(response))
  .catch((err) => console.error(err));
