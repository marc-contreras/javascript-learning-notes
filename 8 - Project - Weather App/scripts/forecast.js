// replace process.env.accukey for the key you are currently using
const key = ``;
const options = {method: 'GET', headers: {Authorization: `Bearer ${key}`}};

// get weather information
const getWeather = async (cityKey) => {
    const base = 'https://dataservice.accuweather.com/currentconditions/v1/';
    const query = `${cityKey}`;

    const response = await fetch(base+query, options);
    const data = await response.json();

    return data[0];
};


// get city information
const getCity = async (city) => {

    const base = 'https://dataservice.accuweather.com/locations/v1/cities/search';
    const query = `?q=${city}`;

    const response = await fetch(base+query, options);
    const data = await response.json();

    return data[0];
};

// getCity('manchester')
//     .then(data => {
//         return getWeather(data.Key);
//     })
//     .then(data => {
//         console.log(data);
//     })
//     .catch(err => console.log(err));

