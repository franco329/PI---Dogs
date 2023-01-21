const { Router } = require('express');

const tempRouter = Router();

// GET /temperaments:
// Obtener todos los temperamentos posibles
// En una primera instancia deberán obtenerlos desde la API externa y guardarlos 
// en su propia base de datos y luego ya utilizarlos desde allí
tempRouter.get('/', (req, res) => {
  res.status(200).json({ message: 'Estoy en /temperament' })

});


module.exports = tempRouter;