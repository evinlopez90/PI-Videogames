require("dotenv").config();
const APIKEY = "4b335690756146c785d60b642faa92c6";
const { json } = require("body-parser");
const e = require("express");
const { Router } = require("express");
const router = Router();
const { getGenres } = require("../controllers/Controllers");

/*  Get /genres implementa la funcion getGenres
   y  responde con un aray de generos 
    
*/

router.get("/", async function (req, res) {
  try {
    const genresDB = await getGenres();
   return res.json(genresDB);
  } catch (err) {
    res.status(404).json({ err: err.message });
  }
});

module.exports = router;
