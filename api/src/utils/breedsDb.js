const { Breed, Temperament } = require('../db');
const { Op } = require('sequelize');

const breedsDb = async (name = null) => {
    const breeds = await Breed.findAll({
        where: name && { name: { [Op.iLike]: `%${name}%` } },
        include: [{
            model: Temperament,
            as: 'temperament',
            attributes: ['name'],
            through: {
                attributes: []
            }
        }]
    }).then(res => res.map(ele => ele.toJSON()));
    breeds.forEach(breed => {breed.temperament = breed.temperament.map(temp => temp.name)});
    return breeds;
};

module.exports = breedsDb;