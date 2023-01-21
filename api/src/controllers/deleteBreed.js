const { Breed } = require('../db');

const deleteBreed = async (name) => {
  const breedToDelete = await Breed.findOne({ where: { name } });
  await breedToDelete.destroy();
  return breedToDelete;
};

module.exports = { deleteBreed };