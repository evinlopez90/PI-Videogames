require('dotenv').config();
const  APIKEY  = "4b335690756146c785d60b642faa92c6"
const { json } = require('body-parser');
const e = require('express');
const { Router } = require('express');
const router = Router();
const { Videogame, Genres } = require('../db');
const axios = require('axios').default;



// Obtengo el detalle de un videogame en particular por ID
router.get('/:idVideogame', async function (req, res) {
    const { idVideogame } = req.params;

    try { 
        if (idVideogame.includes("-")) {
            const gameDB = await Videogame.findOne()
                let X = gameDB
                const information = {
                    id: X.id,
                    name: X.name,
                    image: X.image,
                    rating: X.rating,
                    description: X.description,
                    released: X.released,
                    platforms: X.platforms,
                    genres: X.genres ?  X.genres.map(p => p.name).join(', ') : X.genres
                }
                return res.json(information)
        } else {
            const gameAPI = await axios.get(`https://api.rawg.io/api/games/${idVideogame}?key=${APIKEY}`)
                    
                let X = gameAPI.data;
                const information = {
                    id: X.id,
                    name: X.name,
                    image: X.background_image,
                    genres: X.genres && X.genres.map((p) =>
                        p.name).filter(p => p != null).join(', '),
                    description: X.description_raw,
                    released: X.released,
                    rating: X.rating,
                    platforms: X.platforms && X.platforms.map((p) =>
                        p.platform.name).filter(p => p != null).join(', ')
                }
                return res.json(information)
        }
    } catch (err) {
        res.status(404).json({ error: err.message })
    }
})

module.exports = router;