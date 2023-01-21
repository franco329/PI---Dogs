const { Router } = require('express');
const getTemperaments = require('../controllers/getTemperaments');

const tempRouter = Router();

// GET /temperaments:
// Obtener todos los temperamentos posibles
// En una primera instancia deberán obtenerlos desde la API externa y guardarlos 
// en su propia base de datos y luego ya utilizarlos desde allí
tempRouter.get('/', async (req, res) => {
  try {
    const allTemp = await getTemperaments();
    res.status(200).json(allTemp);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});


module.exports = tempRouter;