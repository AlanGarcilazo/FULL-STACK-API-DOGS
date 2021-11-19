const router = require( 'express' ).Router(); // importo router
const apiInfo = require( '../controllers/getApiInfo' ); // me traigo el controlador de api.
const { Temperament } = require( '../db' ) // me traigo la tabla temperamento.

router.get( '/', async ( req, res ) => { // ACA ME TRAIGO LA INFO DE TEMP

        const dogsApi = await apiInfo();  // ACA ME TRAIGO LA INFO DE LA API(CONTROLADOR).
        const dogsDb = dogsApi.map( el => el.temperament ).join().split(',') // ACA LO UNO Y LO SEPARO POR COMAS.
        const dogsDbTrim = dogsDb.map( el => el.trim()) // ACA LE ELIMINO LOS ESPACIOS EN BLANCO
        
        dogsDbTrim.forEach( el => { //LO RECORRO CON UN FOR EACH.
            if(el !== '') { // SI ES DIFERENTE AL STRING VACIO QUE BUSQUE O CREE. SI NO LO ENCUENTRA LO CREA.
                Temperament.findOrCreate({
                    where: {
                        name: el
                    }
                })
            }
        })

        const allTemperaments = await Temperament.findAll(); // TRAEME TODOS LOS TEMP.

        return res.status(200).send( allTemperaments ) // RETORNAME EL ESTADO OK
})


module.exports = router;