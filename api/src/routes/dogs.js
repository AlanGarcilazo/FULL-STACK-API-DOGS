const {Router} = require('express');
const router = Router(); // ME TRAIGO EL ROUTER
const { Dog } = require("../db"); // ME TRAIGO LA TABLA DOG
const getAllDogs = require("../controllers/getAllDogs"); // ME TRAIGO EL CONTROLADOR DE OBTENER TODOS LOS PERROS.

//SUB RUTAS.

// SI LE PASAS QUERY, TE TRAE UN SOLO PERRO; SI NO LE PASAS QUERY TE TRAE TODO. SI LE PASAS ALGO MAL, TIRA ERROR.
router.get("/", async (req, res) => { //LOCALHOST/DOGS/ --- > HAGO ESTO , TRAE TODAS LAS RAZAS. 
  
  try {  
    const { name } = req.query; // DESTRUCTURO EL ELEMENTO QUE VIAJA DE QUERY. ELEMENTO VIAJE DE RUTAS.
    const allDogs = await getAllDogs(); // CREO LA VARIABLE ALL DOGS Y ESPERA EL CONTROLADOR.

    if (name) { // SI EXISTE NAME 
      const filtered = allDogs.filter((el) => // RECORRE EL ARRAY DE TODOS LOS PERROS, POR C/ ELEMENTO 
        el.name.toLowerCase().includes(name.toLowerCase()) // PASA TODO A MINISCULA.Y SI INCLUYE LO QUE PASE POR QUERY TAMBIEN.
      );
      if (filtered.length) return res.status(200).send(filtered); // SI ES EL ARRAY TIENE INDICES, DEVOLVEME EL OK DEL STATUS. Y RESPONDE EL ARRAY QUE TIENE LOS DOGS FILTRADOS.
      return res.status(404).send("The breed of dog has not been found"); // SI NO, ES ARRAY VACIO, DEVOLVE ERROR.
    }
    return res.status(200).send(allDogs); // SI ENCONTRO POR QUERY DEVOLVER ESE ELEMENTO.
  } catch (err) {
    console.log(err);
    return res.status(404).json(err);
  }
});


// TRAE POR ID, SI ENCUENTRA DEVUELVE EL ID, SI NO, DEVUELVE ERROR.
router.get("/:id", async (req, res) => {  //LOCALHOST/DOGS/ID (DETALLE) ---> HAGO ESTO
 
  try {
    const { id } = req.params; // DESTRUCTURO ID DE PARAMS.

    if (id) { // SI EXISTE ID 
      const allDogs = await getAllDogs(); // TRAER TODOS LOS PERROS.
      const filtered = allDogs.filter((dog) => dog.id == id); // FILTRE, Y SI ES ENCUENTRA UN ELEMENTO POR ID, LO COMPARA CON EL PARAMS.
      if (filtered.length > 0) return res.status(200).send(filtered); // SI EL ELEMENTO ES MAYOR A 0, RETURNAME EL OK.
      return res.status(404).send("The ID was not found"); // SI NO DEVOLVER ERROR.
    }
  } catch (err) {
    console.log(err);
    return res.status(404).json(err); // SI NO ENCUENTRA NADA DEVUELVE UN 404. CON ERROR.
  }
});


// POSTEA/CREA UNA NUEVA RAZA DE PERROS Y PIDE ALGUNOS REQ ( NOMBRE, PESO, ALTURA);
router.post("/new", async (req, res) => {  // LOCALHOST/DOGS/NEW ACA CREO RAZAS. CON POST, Y ESTO SE DEPOSITA EN LA BASE DE DATOS.
 
  try {
    const { name, height, weight, lifeSpan, createdInDb, temperament } = // DESTRUCTURA REQ.BODY, 
      req.body;
    if (!name || !height || !weight) // SI NO EXISTE NOMBRE, ALTURA Y PESO, ARROJA ERROR.
      return res.status(404).send("The name, height and weight are required"); // PIDE REQUISITOS.
    const createdDog = await Dog.create({ // CONST QUE CREA PERROS, 
      name,
      height,
      weight,
      lifeSpan,      
    });
    await createdDog.setTemperaments(temperament); // ACA SE UNE LAS TABLAS, DEL PERRO QUE CREE MAS EL TEMP.
    return res.status(200).send("The dog has been successfully created"); // ACA DEVUELVE EL OK.
  } catch (err) {
    console.log(err);
    res.status(404).json(err); // SI NO DEVUELVE ERROR.
  }
});


module.exports = router;
