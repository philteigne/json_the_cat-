const request = require('request');

const input = process.argv[2];

request(`https://api.thecatapi.com/v1/breeds/search?q=${input}`, (err, data) => {
  if (err) {
    console.log(err);
  } else {
    const dataPull = JSON.parse(data.body);
    console.log(dataPull[0].description);
  }
});
