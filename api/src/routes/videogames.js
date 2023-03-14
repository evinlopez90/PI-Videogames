require('dotenv').config();
const  APIKEY  = "4b335690756146c785d60b642faa92c6"
const { json } = require('body-parser');
const e = require('express');
const { Router } = require('express');
const router = Router();
const { Videogame, Genres } = require('../db');
const axios = require('axios').default;


// en este router traigo todos los juegos de la api y de la db, y por query en el caso dado
router.get('/', async function (req, res) {
    const { name } = req.query;
  
  try {
    // pregunto que si me enviaron algo por query ->-> esto es un GET | /videogames/name?="..."
    if (name) {
      // -> -> me taido todos los juegos de la db que coicidan con el name
      let gamesDB = await Videogame.findOne({where: {name: name}, include: [Genres]});
         // organizo solo la informacion que necesito
      if (gamesDB){
          let X = gamesDB
          gamesDBFull = {
              id: X.id,
              name: X.name,
              image: X.image,
              rating: X.rating,
              source: "creado",
              genres: X.genres.map(p => p.name).join(', '),
          }
          // -> -> me taido todos los juegos de la api que coicidan con el name
        let gamesAPI = await axios.get(`https://api.rawg.io/api/games?search=${name}&key=${APIKEY}&page_size=15`) 
        // organizo solo la informacion que necesito
        gamesAPI = gamesAPI.data.results.map((X) => {
          var game = {
            id: X.id,
            name: X.name,
            rating: X.rating,
            source: 'Api',
            image: X.background_image,
            genres: X.genres && X.genres.map((p) => p.name).filter(p => p != null).join(', '),
          };
          return game;
        })
        // concateno los juego de la db y la api y los  envio a el back
        res.json(gamesAPI.concat(gamesDBFull))
        // en casi de que no renga ningun juego con el nombre en la db
      } else {
       // me taido todos los juegos de la api que coicidan con el name
        let gamesAPI = await axios.get(`https://api.rawg.io/api/games?search=${name}&key=${APIKEY}&page_size=15`)
          // organizo solo la informacion que necesito
        gamesAPI = gamesAPI.data.results.map((X) => {
          var game = {
            id: X.id,
            name: X.name,
            rating: X.rating,
            releaseDate: X.releaseDate,
            source: 'Api',
            image: X.background_image,
            genres: X.genres && X.genres.map((p) => p.name).filter(p => p != null).join(', '),
          };
          return game;
        })
         // corto el array de juegos y envio solo 15 al back
        gamesAPI = gamesAPI.slice(0, 16)
        res.json(gamesAPI)
      }
      // en el caso dado de que no me enviaron query -> -> esto es  GET | /videogames
    } else {
      let gamesResults = []
      // me traigo todos los juegos de la api
      let apiRAWG = `https://api.rawg.io/api/games?key=${APIKEY}`

      for (let index = 0; index < 5; index++) {
        // me traigo todos los juegos de la api y organiso la iformacion necesaria 
        let games = (await axios.get(apiRAWG)).data
        let dataGame = games.results.map((G) => {
          var game = {
            name: G.name,
            image: G.background_image,
            genres: G.genres.map((gen) => gen.name).filter(p => p != null).join(', '),
            source: "Api",
            id: G.id,
            rating: G.rating
          };
          return game
        })
        apiRAWG = games.next;
        gamesResults = gamesResults.concat(dataGame)
      }
      // taigo todos los juegos de la db
      let dbGames = await Videogame.findAll({ include: [Genres] })
      let  gamesDb =  dbGames.map((G) => {
        var game = {
          name: G.name,
          image: G.image,
          genres: G.genres.map((gen) => gen.name).filter(p => p != null).join(', '),
          source: "creado",
          id: G.id,
          platforms: G.platforms,
          rating: G.rating
        };
        return game
      })
      // envio los juegos de la db y de la api juntos al back
      gamesResults = gamesResults.concat(gamesDb)
      res.json(gamesResults)
    }
  } catch (err) {
    res.status(404).json({ err: err.message })
  }
})
 
 
 
 router.post('/', async (req, res) => {
     try {
         let { name, description, releaseDate, rating, genres, platforms, image } = req.body;
         platforms = platforms.join(', ')
 
         const newGame = await Videogame.create({
             name,
              description,
               releaseDate, 
               rating,
               source: 'creado',
                 platforms,
                 image  
         })
        
         genres.forEach( async (G) => {
          let genresGame = await Genres.findAll({ where: { name: G } })
          await newGame.addGenres(genresGame)
        })
        res.json(newGame)
    
     } catch (error) {
         res.send('Videogame created successfully!')
     }
 })
 
 
 
 
 module.exports  = router