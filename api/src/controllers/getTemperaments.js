const allTemperaments = require("../utils/allTemperaments");

const getTemperaments = async () => {
  const getTemp = await allTemperaments();
  return getTemp;
};

module.exports = getTemperaments;
