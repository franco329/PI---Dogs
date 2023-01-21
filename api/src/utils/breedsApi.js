const axios = require('axios');
const { API_KEY } = process.env;

const breedsApi = async (name = null) => {
    
    const apiUrl = await axios(`https://api.thedogapi.com/v1/breeds${name ? `/search?q=${name}&` : '?'}api_key=${API_KEY}`)
    .then(res => res.data)
    .then(apiUrl => apiUrl.map(breed => {
        return {
            id: breed.id,
            name: breed.name,
            weight: breed.weight.metric,
            height: breed.height.metric,
            temperament: breed.temperament ? breed.temperament.split(', ').flat().sort() : undefined,
            life_span: breed.life_span,
            image: `https://cdn2.thedogapi.com/images/${breed.reference_image_id}.jpg`
        };
    }));
    return apiUrl;
};

module.exports = breedsApi;