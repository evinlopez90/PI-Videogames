/* eslint-disable no-mixed-operators */
import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { createVideogame, getGenres } from "../../accions/index";
import "./CreateGame.css";
import NavBar from "../NavBar/NavBar";
import image from  "../../imagenes/C.png"


function CreateGame() {
  const dispatch = useDispatch();
  const genres = useSelector((store) => store.genres);
  
  
 
  const [error, setError] = useState({
    name: false,
    description: false,
    image: false,
    releaseDate: false,
    rating: false,
    genres: false,
    platforms: false,
  })

  const [game, setGame] = useState({
    name: "",
    description: "",
    image: "",
    releaseDate: "",
    rating: 0,
    genres: [],
    platforms: [],
  });

  useEffect(() => {
    dispatch(getGenres());
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  const randomPlatforms = [
    "PC",
    "iOS",
    "Android",
    "macOS",
    "PlayStation 4",
    "PlayStation 5",
    "Xbox",
    "PS Vita",
  ];
  
  let array = ["°", "!", "#", "$", "%", "&", "/", "(", ")", "=", "?", "¡","[", "]", "{", "}", ";"]
    
  // esta funcion escucha el evento
  const ChangeInput = (e) => {

    if(e.target.name === "name" && array.includes(e.target.value)) {
      alert("!El nombre no puede contener simbolos!")
       return
    }

    if(e.target.name.length > 0) {
      setError({
        ...error,
        [e.target.name]: false
      })} else {
        setError({
          ...error,
          [e.target.name]: true
      })
      
      }

    if (e.target.name === "genres" || e.target.name === "platforms") {
      // me traigo el array de genres o platforms
      const arr = game[e.target.name];
      // guardo el estado anterior y uno el valor de genres o platforms al el valor que me llega del evento
      setGame({
        ...game,
        [e.target.name]: arr.concat(e.target.value),
      });
    } else {
      // si no es ni genero ni plataforma es cualquiera de los otros capmos y lo guardo segun el que sea
      setGame({
        ...game,
        [e.target.name]: e.target.value,
      });
    }

    if( game.rating > 5 || game.rating < 0 ) {
      setGame({
       ...game,
       [e.target.name]: 0
      })
  return alert("Recuerda, El rating no puede ser menor a 0 mayor a 5")
    
   }
    
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const obj = {
      name: game.name,
      description: game.description,
      image: game.image,
      releaseDate: game.releaseDate,
      rating: game.rating,
      genres: game.genres,
      platforms: game.platforms,
    };

    // Validaciones

    if(!obj.name) {
    return  setError({
        ...error,
        name: true
      })
    }

    if (!obj.description) {
     return setError({
        ...error,
        description: true
      })
    }
    if (!obj.releaseDate) {
    return  setError({
        ...error,
        releaseDate: true
      })
    }
    if (!obj.rating  || obj.rating === 0 ) {
    return  setError({
        ...error,
        rating: true
      })
    }

    if( obj.rating > 5 || obj.rating < 0  ) {
      setGame({
       ...game,
       [e.target.name]: 0
      })
  return alert("Recuerda, El rating no puede ser menor a 0 mayor a 5")
    
   }


    if (!obj.image) {
      return  setError({
          ...error,
          image: true
        })
      }


    if(obj.genres.length === 0) {
     return setError({
        ...error,
        genres: true
      })
    }

    if(obj.platforms.length === 0) {
    return  setError({
        ...error,
        platforms: true
      })
     }  
    // creo el juego una vez que cada uno de los capmos cumplan las condiciones
    dispatch(createVideogame(obj));

    e.target.reset();
    alert("Videogame creado correctamente !");

    setError({
      name: false,
      description: false,
      image: false,
      releaseDate: false,
      rating: false,
      genres: false,
      platforms: false,
    })

    setGame({
      name: "",
      description: "",
      image: "",
      releaseDate: "",
      rating: 0,
      genres: [],
      platforms: [],
    });

  }

  return (
    <>
    <NavBar/>
    <form
      id="survey-form" 
      className="formC"
      onChange={(e) => ChangeInput(e)}
      onSubmit={(e) => handleSubmit(e)}
    >
      <div className="caja1">
        <div className="conten">
          <div className="divs">
            <input type="text" className="input" name="name" value={game.name}/>
            <label className="lbl-nombre">
              <span className="text-nomb">Name</span>
            </label>
            {error.name === true ? <label className="validate">!Falta el nombre!</label> : null}
          </div>
       
       
            
          <div className="divs">
            <input type="text" className="input" name="description" value={game.description}/>
            <label className="lbl-nombre">
              <span className="text-nomb">Descrition</span>
            </label>
            {error.description === true ? <label className="validate">!Falta la descripcion!</label> : null}
          </div>
          
          <div className="divs">
          <label className="lbl-nombre">
              <span className="text-nomb">DeleaseDate</span>
            </label>
            <input type="date"  className="input" name="releaseDate"  value={game.releaseDate} />
            {error.releaseDate === true ? <label className="validate">!Falta la fecha de creacion!</label> : null}
          </div>
          

          <div className="divs">
          <label className="lbl-nombre">
              <span className="text-nomb">Rating</span>
            </label>
            <input type="number" className="input" name="rating" value={game.rating} />
            {error.rating === true ? <label className="validate">!Falta el rating!</label> : null}

          </div>
         
          <div className="divs">
          <label className="lbl-nombre">
              <span className="text-nomb">URL of image</span>
            </label>
            <input type="text" className="input" name="image" value={game.image} />
            {error.image === true ? <label className="validate">!Falta la imagen!</label> : null}
          </div>

        </div>
      </div>

      <div className="caja2">
        <div className="conten2">
          <div className="divs2">
            <label className="pl-gr">Genres</label>
            <div>
              {genres.map((gen) => (
                <div key={gen.name} className="opciones">
                  <input
                    type="checkbox"
                    name="genres"
                    value={gen.name}
                  ></input>
                  <label name={gen}>{gen.name}</label>
                </div>
              ))}
            </div>
            {error.genres === true ? <label className="validate2">!elige un genero!</label> : null}
          </div>

         

          <div className="divs2">
            <label  className="lb-pf">Platforms</label>
            <div>
              {randomPlatforms.map((P) => (
                <div key={P} className="opciones">
                  <input type="checkbox" name="platforms" value={P}></input>
                  <label name={P}>{P}</label>
                </div>
              ))}
            </div>
            {error.platforms === true ? <label className="validate2">!elige una plataforma!</label> : null}
          </div>
        </div>
        <div className="btn">
          <button className="button" type="submit">
            <span>Create</span>
          </button>
        </div>
      </div>
    </form>
    
      <img src={image} alt="" />
   
  </>
)
}


export default CreateGame;
