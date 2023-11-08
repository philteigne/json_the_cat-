const request = require('request');

const args = process.argv[2];

const requestData = (input) => {
  request(`https://api.thecatapi.com/v1/breeds/search?q=${input}`, (err, data) => {
    if (err) {
      console.log(err);
      return;
    }
    const dataPull = JSON.parse(data.body);
    if (dataPull.length === 0) {
      console.log("That's not a cat. This is only for cats.");
      return;
    }
    console.log(dataPull[0].description);
  });
};

requestData(args);