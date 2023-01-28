const { Router } = require("express");
const createBreed = require("../controllers/createBreed");
const getBreeds = require("../controllers/getBreeds");
const getBreedById = require("../controllers/getBreedById");
const findBreed = require("../controllers/findBreed");

const breedRouter = Router();

// GET /breeds:
// Obtener un listado de las razas de perro
// Debe devolver solo los datos necesarios para la ruta principal

// [ ] GET /breeds?name="...":
// Obtener un listado de las razas de perro que contengan la palabra ingresada
// como query parameter
// Si no existe ninguna raza de perro mostrar un mensaje adecuado
breedRouter.get("/", async (req, res) => {
  const { name } = req.query;
  let breeds;
  try {
    if (!name) {
      breeds = await getBreeds();
    } else {
      breeds = await findBreed(name);
    }
    res.status(200).json(breeds);
  } catch (error) {
    res.status(401).json({ error: error.message });
  }
});

// [ ] GET /breeds/{idRaza}:
// Obtener el detalle de una raza de perro en particular
// Debe traer solo los datos pedidos en la ruta de detalle de raza de perro
// Incluir los temperamentos asociados
breedRouter.get("/:id", async (req, res) => {
  const { id } = req.params;
  try {
    const breed = await getBreedById(id);
    res.status(200).json(breed);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

// [ ] POST /breeds:
// Recibe los datos recolectados desde el formulario controlado de la ruta de
// creación de raza de perro por body
// Crea una raza de perro en la base de datos relacionada con sus temperamentos
breedRouter.post("/", async (req, res) => {
  const breed = req.body;
  try {
    const newBreed = await createBreed(breed);
    res.status(200).json(newBreed);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

module.exports = breedRouter;
