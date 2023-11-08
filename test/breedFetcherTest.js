const { fetchBreedDescription } = require('../breedFetcher');
const { assert } = require('chai');

describe('#breedFetcher', () => {
  it('should return the correct description for "Siberian"', (done) => {
    fetchBreedDescription('Siberian', (err, desc) => {
      // no error in this scenario
      assert.equal(err, null);

      const expectedDesc = "The Siberians dog like temperament and affection makes the ideal lap cat and will live quite happily indoors. Very agile and powerful, the Siberian cat can easily leap and reach high places, including the tops of refrigerators and even doors.";

      let returnData = JSON.parse(desc.body);
      returnData = returnData[0].description;

      assert.equal(expectedDesc, returnData.trim());

      done();
    });
  });
  it('should return an empty description for "Cookie Monster"', (done) => {
    fetchBreedDescription('Cookie Monster', (err, desc) => {
      // no error in this scenario
      assert.equal(err, null);

      const expectedDesc = '[]';

      assert.equal(expectedDesc, desc.body);

      done();
    });
  });
});

