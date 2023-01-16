const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': '21a4844f08msh3a160f840f7c4dap1e8cbbjsn27ab3c79b460',
		'X-RapidAPI-Host': 'exercisedb.p.rapidapi.com'
	}
};

fetch('https://exercisedb.p.rapidapi.com/exercises/exercise/%7Bid%7D', options)
	.then(response => response.json())
	.then(response => console.log(response))
	.catch(err => console.error(err));
