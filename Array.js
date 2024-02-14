// Fetch data from the REST Countries API
fetch('https://restcountries.com/v3.1/all')
  .then(response => response.json())
  .then(data => {
    // Problem 1: Get all the countries from Asia continent/region using Filter function
    const asiaCountries = data.filter(country => country.region === 'Asia');
    console.log("Countries from Asia:", asiaCountries);

    // Problem 2: Get all the countries with a population of less than 2 lakhs using Filter function
    const countriesWithPopulationLessThan2Lakhs = data.filter(country => country.population < 200000);
    console.log("Countries with population less than 2 lakhs:", countriesWithPopulationLessThan2Lakhs);

    // Problem 3: Print the details (name, capital, flag) using forEach function
    data.forEach(country => {
      console.log(`Name: ${country.name.common}, Capital: ${country.capital}, Flag: ${country.flags.png}`);
    });

    // Problem 4: Print the total population of countries using reduce function
    const totalPopulation = data.reduce((accumulator, country) => accumulator + (country.population || 0), 0);
    console.log("Total population of countries:", totalPopulation);

    // Problem 5: Print the country that uses US dollars as currency
    const usDollarCountries = data.filter(country => country.currencies && country.currencies.USD);
    console.log("Countries that use US dollars:", usDollarCountries);
  })
  .catch(error => console.error('Error fetching data:', error));
