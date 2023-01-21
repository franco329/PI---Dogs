const { Router } = require('express');
const breedRouter = require('./breedRouter');
const tempRouter = require('./tempRouter');
// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');


const router = Router();

// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);
router.get('/', (req, res) => {
  res.status(200).json({ message: 'Estoy en /' })
});

router.use('/breeds', breedRouter);
router.use('/temperament', tempRouter);


module.exports = router;
