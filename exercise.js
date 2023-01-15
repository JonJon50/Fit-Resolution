const options = {
    method: 'GET',
    headers: {
        'X-RapidAPI-Key': 'dfbd975756msh5c34e78571a6059p156249jsne62ed8b440fa',
        'X-RapidAPI-Host': 'exercisedb.p.rapidapi.com'
    }
};

fetch('https://exercisedb.p.rapidapi.com/exercises', options)
    .then(response => response.json())
    .then(response => console.log(response))
    .catch(err => console.error(err));
