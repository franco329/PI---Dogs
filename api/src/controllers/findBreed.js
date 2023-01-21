const allTemperaments = require('../utils/allTemperaments');
const breedsApi = require('../utils/breedsApi');
const breedsDb = require('../utils/breedsDb');
const sortFn = require('../utils/sortFn')

const findBreed = async (name) => {
    const brApi = await breedsApi(name);
    const brDb = await breedsDb(name);
    await allTemperaments();
    
    const breed = [...brApi, ...brDb].sort(sortFn);

  if (!breed.length) throw new Error(`The breed with the name ${name} does not exist.`);

  return breed;
};

module.exports = findBreed;