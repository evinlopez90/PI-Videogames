require('dotenv').config();

const { Router } = require('express');
const router = Router();
// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');
const videogames = require('./videogames.js')
const videogame = require('./videogame.js')
const genres = require('./genres')
// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);
router.use('/videogames', videogames);
router.use('/videogames', videogame);
router.use('/genres', genres )



module.exports = router;
