const { Breed, Temperament } = require('../db');

const createBreed = async (data) => {
  const { name, weightMax, weightMin, heightMax, heightMin, temperament, life_span, image } = data;
  let newBreed = await Breed.create({
    name,
    weightMax,
    weightMin,
    heightMax,
    heightMin,
    temperament,
    life_span,
    image
  });

  if (temperament) {
    const [temp, created] = await Temperament.findOrCreate({
      where: { name: temperament }
    });
    newBreed.addTemperament(temp);
  };
  await newBreed.save();
  return newBreed;
};

module.exports = { createBreed };