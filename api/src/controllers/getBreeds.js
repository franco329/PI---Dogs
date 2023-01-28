const breedsApi = require("../utils/breedsApi");
const breedsDb = require("../utils/breedsDb");
const allTemperaments = require("../utils/allTemperaments");
const sortFn = require("../utils/sortFn");

const getBreeds = async () => {
  const brApi = await breedsApi();
  const brDb = await breedsDb();
  await allTemperaments();

  const allBreeds = [...brApi, ...brDb]
    .map((breed) => {
      return {
        id: breed.id,
        name: breed.name,
        weight: breed.weight,
        height: breed.height,
        temperament: breed.temperament,
        life_span: breed.life_span,
        image: breed.image,
      };
    })
    .sort(sortFn);
  return allBreeds;
};

module.exports = getBreeds;
