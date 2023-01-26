const { Breed, Temperament } = require("../db");
const allTemperaments = require("../utils/allTemperaments");

const createBreed = async (data) => {
  await allTemperaments();

  if (!data.name) throw new Error("Breed name is required");
  if (!data.height) throw new Error("Breed height is required");
  if (!data.weight) throw new Error("Breed weight is required");

  let newBreed = await Breed.create(data);

  if (Array.isArray(data.temperament) && data.temperament.length > 0) {
    for (let name of data.temperament) {
      const temperamentDb = await Temperament.findOne({ where: { name } });
      await newBreed.addTemperament(temperamentDb);
    }
  }

  const newBreedDb = await Breed.findOne({
    where: { id: newBreed.id },
    include: [
      {
        model: Temperament,
        as: "temperament",
        attributes: ["name"],
        through: {
          attributes: [],
        },
      },
    ],
  }).then((results) => results.toJSON());

  newBreedDb.temperament = newBreedDb.temperament.map((temp) => temp.name);

  return newBreedDb;
};

module.exports = createBreed;
