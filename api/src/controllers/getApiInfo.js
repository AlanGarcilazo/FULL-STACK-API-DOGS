const axios = require("axios");

module.exports = async function getApiInfo() { 
  const apiInfo = await axios.get("https://api.thedogapi.com/v1/breeds"); // me traigo datos de la api, aca espero la data de axios (data)
  const list = await apiInfo.data.map((el) => { // hago listo de lo que necesito con map.
    return {
      name: el.name, //devuelvo todos los elementos que necesito.
      lifeSpan: el.life_span,
      id: el.id,
      height: el.height.metric,
      weight: el.weight.metric,
      temperament: [el.temperament]
        .join() // aca los uno.
        .split(",") //  separo por coma
        .map((el) => el.trim()), // elimine los espacios en blanco del string
      img: el.image.url,
    };
  });
  return list;
};

// me traigo toda la api info.
