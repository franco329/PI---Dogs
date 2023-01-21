const { getBreeds } = require('./getBreeds');

const findBreed = async (name) => {
  const breed = await getBreeds();
  const dataBreed = breed.filter(breed => breed.name.toLowerCase().includes(name.toLowerCase()));
  if(!dataBreed.length) throw new Error(`${name} not found`);
  return dataBreed;
};

module.exports = { findBreed };