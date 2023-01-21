const getBreeds = require('./getBreeds');

const getBreedById = async (id) => {
  const allBreeds = await getBreeds();
  const breedId = allBreeds.find(breed => breed.id == id);
  if(!breedId) throw new Error(`The puppy breed with the id: ${id} does not exist`);
  return breedId;
};

module.exports = getBreedById;