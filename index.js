const { fetchBreedDescription } = require('./breedFetcher');

const breedName = process.argv[2];

fetchBreedDescription(breedName, (error, desc) => {
  if (error) {
    console.log('Error fetch details:', error);
    return error;
  } else {
    const pullData = JSON.parse(desc.body);
    console.log(pullData[0].description);
    return pullData[0].description;
  }
});
