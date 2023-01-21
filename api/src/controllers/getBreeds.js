const { Breed, Temperament } = require('../db');
const axios = require('axios');
const { API_KEY } = process.env;

const getBreeds = async () => {
  try {
    // Obtener datos de la API externa
    getApiInfo = async () => {
      const apiUrl = await axios.get(`https://api.thedogapi.com/v1/breeds/?api_key=${API_KEY}`)
      const apiInfo = await apiUrl.data.map((breed) => {
        return {
          id: breed.id,
          name: breed.name,
          weightMin: breed.weight.metric.split(' - ')[0] !== "NaN" ? 
            breed.weight.metric.split(' - ')[0] : 
            breed.weight.metric.split(' - ')[1] ? 
              Math.round(breed.weight.metric.split(' - ')[1] * 0.6) : '0.0',
          weightMax: breed.weight.metric.split(' - ')[1] ?
            breed.weight.metric.split(' - ')[1] : '0.0',
          heightMin: breed.height.metric.split(' - ')[0],
          heightMax: breed.height.metric.split(' - ')[1] ? 
            breed.height.metric.split(' - ')[1] : 
            Math.round(breed.height.metric.split(' - ')[0] * 1.1),
          life_span: breed.life_span,
          temperament: breed.temperament ? breed.temperament : null,
          image: breed.image.url
        };
      });
      return apiInfo;
    }

    // Obtener datos de la base de datos
    const getDbInfo = async () => {
      const db = await Breed.findAll({
        include: {
          model: Temperament,
          attributes: ['name'],
          through: {
            attributes: [],
          },
        }
      });
      return db.map((ele) => {
        return {
          name: ele.name,
          id: ele.id,
          weightMax: ele.weightMax,
          weightMin: ele.weightMin,
          heightMax: ele.heightMax,
          heightMin: ele.heightMin,
          temperament: ele.temperament.map((el) => el.name).join(", "),
        };
      });
    };    

    // Unir los datos de ambas fuentes
    const allInfo = async () => {
      const apiInfo = await getApiInfo();
      const dbInfo = await getDbInfo();
      const allData = apiInfo.concat(dbInfo).sort((a,b) => {
        return a.name < b.name ? -1 : 1;
    });
    return allData;
  };

    const allBreeds = await allInfo.map(breed => ({
      id: breed.id,
      name: breed.name,
      weight: breed.weightMin + ' Kg' + ' - ' + breed.weightMax + ' Kg',
      height: breed.heightMin + ' cm' + ' - ' + breed.heightMax + ' cm',
      life_span: breed.life_span,
      temperament: breed.temperament,
      image: breed.image
    }));
    return allBreeds;
  } catch (error) {
    console.error(error);
  }
};

module.exports = { getBreeds };