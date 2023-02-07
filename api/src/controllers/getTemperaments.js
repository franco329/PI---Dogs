// const allTemperaments = require("../utils/allTemperaments");
const axios = require("axios");
const { Temperament } = require("../db");
const { API_KEY, API_URL } = process.env;
const sortFn = require("../utils/sortFn");

const getTemperaments = async () => {
  const api = await axios.get(
    `https://api.thedogapi.com/v1/breeds?api_key=${API_KEY}`
  );
  const perros = await api.data.map((el) => el.temperament);
  let perrosSplit = await perros.join().split(",");
  let perrosTrim = await perrosSplit.map((e) => e.trim());
  await perrosTrim.forEach(async (e) => {
    if (e.length > 0) {
      await Temperament.findOrCreate({
        where: { name: e },
      });
    }
  });
  const allTemperament = await Temperament.findAll();
  return allTemperament;
};

module.exports = getTemperaments;

// const getTemperaments = async () => {
//   const getTemp = await allTemperaments();
//   return getTemp;
// };

// const config = {
//   headers: {
//     "Cache-Control": "no-cache",
//   },
// };

// const getTemperaments = async () => {
//   const tempApi = await axios
//     .get(`https://api.thedogapi.com/v1/breeds?api_key=${API_KEY}`)
//     .then((res) => res.data)
//     .then((breeds) => {
//       let temperaments = breeds
//         .filter((breed) => breed.temperament !== undefined)
//         .map((breed) => breed.temperament.split(", "))
//         .flat()
//         .sort(sortFn);
//       //aplana el array, si hay un array dentro de otro array
//       return [...new Set(temperaments)]; //setea un nuevo array eliminando duplicados
//     });

//   const tempDb = [];

//   for (let temp of tempApi) {
//     let temperament = await Temperament.findOne({
//       where: {
//         name: temp,
//       },
//     });
//     if (temperament) {
//       await temperament.update({ name: temp });
//     } else {
//       let temps = await Temperament.create({ name: temp });
//       tempDb.push(temps);
//     }
//   }
//   return tempDb;
