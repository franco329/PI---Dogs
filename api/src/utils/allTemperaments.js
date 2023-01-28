const axios = require("axios");
const { Temperament } = require("../db");
const { API_KEY } = process.env;
const sortFn = require("./sortFn");

const allTemperaments = async () => {
  const tempApi = await axios(
    `https://api.thedogapi.com/v1/breeds?api_key=${API_KEY}`
  )
    .then((res) => res.data)
    .then((breeds) => {
      let temperaments = breeds
        .filter((breed) => breed.temperament !== undefined)
        .map((breed) => breed.temperament.split(", "))
        .flat() //aplana el array, si hay un array dentro de otro array
        .sort(sortFn);
      return [...new Set(temperaments)]; //setea un nuevo array eliminando duplicados
    });

  const tempDb = [];

  // for (let temp of tempApi) {
  //     let [temps] = await Temperament.findOrCreate({
  //         where: {
  //             name: temp
  //         }
  //     })
  //     tempDb.push(temps)
  // };
  for (let temp of tempApi) {
    let temperament = await Temperament.findOne({
      where: {
        name: temp,
      },
    });
    if (temperament) {
      await temperament.update({ name: temp });
    } else {
      let temps = await Temperament.create({ name: temp });
      tempDb.push(temps);
    }
  }
  return tempDb;
};

module.exports = allTemperaments;
