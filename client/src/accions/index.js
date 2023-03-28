/* eslint-disable no-cond-assign */


// esta accion trae todos los video juegos 
export function getVideogames() {
    return function (dispatch) {
      return fetch(`http://localhost:3096/videogames`)
        .then(response => response.json())
        .then(json => {
          dispatch({
             type: "GET_VIDEOGAMES",
             payload: json });
        });
    };
  }
  // esta accion busca los bideojuegos que coicidan con el nombre expecificado en el search
  export function searchVideogames(name) {
    return (dispatch, getState) => {
      
        fetch(`http://localhost:3096/videogames?name=${name}`)
        .then((resp) => resp.json())
        .then((json) => {
          dispatch({
            type: "SEARCH_VIDEOGAMES",
            payload: json,
          });
        });
    }
  }
  // esta accion busca los video juegos por su id
  export function getVideogameById(id) {
    return (dispatch) =>
      fetch(`http://localhost:3096/videogames/${id}`)
        .then((resp) => resp.json())
        .then((json) => {
          dispatch({
            type: "GET_VIDEOGAME_BY_ID",
            payload: json,
          });
        });
  }
  // me trae todos los generos del back al front 
  export function getGenres() {
    return (dispatch) =>
      fetch(`http://localhost:3096/genres`)
        .then((resp) => resp.json())
        .then((json) => {
          dispatch({
            type: "GET_GENRES",
            payload: json,
          });
        });
  }
  // esta accion crea un video juego 
  export function createVideogame(obj) {
    return (dispatch) =>
      fetch("http://localhost:3096/videogames", {
        method: "POST",
        node: 'cors',
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify(obj),
      })
        .then((resp) => resp.json())
        .then((json) => {
          dispatch({
            type: "CREATE_VIDEOGAME",
            payload: json,
          });
        });
  }
  
  export const resetAll = () => {
    return (dispatch) => {
      dispatch({
        type: "RESET",
      });
    };
  };
  
  // aca filtro por generos los juego que trae la actions getVideogames 
  // recibo como parametro el valor que viene desde filter.jsx con el dispatch y el getState de redux
  export const filterByGenre = (genre) => (dispatch) => {   
    dispatch({
      type: "FILTER_BY_GENRE",
      payload: genre
    });
  };
  

  export const rating = (ratin) => (dispatch) => {
     dispatch({
      type: "RATING",
      payload: ratin
     })
  }


  export const alfabetic = (type) => (dispatch) => {
    dispatch({
     type: "ALFABETIC",
     payload: type
    })
 }

 export const createOrApi = (type) => (dispatch) => {
  dispatch({
   type: "CREATE_OR_API",
   payload: type
  })
}

  
  // export const orderAsc = (type) => (dispatch, getState) => {
  //   let videogamesOrder = []
  //     let filtered;
  //     if(getState().filteredVideogames.length === 0) {
  //       filtered = getState().videogames
  //     } else {
  //      filtered = getState().defaultFilteredVideogames
  //     }
  //     if(type === "default") {
  //       if(getState().filteredVideogames.length === 0 ) {
  //         videogamesOrder = getState().defaultVideogame
  //        } else {
  //         videogamesOrder = getState().filteredVideogames
  //        }
  //     }
  
  //       if (type === "asc_name") {
  //         videogamesOrder = filtered.sort((a, b) => {
  //           if (a.name > b.name) return 1;
  //           if (a.name < b.name) return -1;
  //           return 0;
  //         });
  
  //       } else if (type === "asc_rating") {
  //         videogamesOrder = filtered.sort(
  //           (a, b) => a.rating - b.rating
  //         );
  //       }
    
  //     dispatch({
  //       type: "ORDER_ASC_RATING",
  //       payload: {
  //         videogamesOrder,
  //         name: type,
  //       },
  //     });
  // }
  
  
  // export const orderDesc = (type) => (dispatch, getState) => {
  //   let filtered;
    
  //      if(getState().filteredVideogames.length === 0) {
  //       filtered =  getState().videogames
  //      } else {
  //       filtered = getState().defaultFilteredVideogames
  //      }
     
    
  //   let videogamesOrder = []

  //   if(type === "default") {
  //       if(getState().filteredVideogames.length === 0  ) {
  //         videogamesOrder = getState().defaultVideogame
  //        } else {
  //         videogamesOrder = getState().filteredVideogames
  //        }
      
  //   }
      
  //   if (type === "desc_name") {
  //     videogamesOrder = filtered.sort((a, b) => {
  //       if (a.name < b.name) return 1;
  //       if (a.name > b.name) return -1;
  //       return 0;
  //     });
  //   } else if (type === "desc_rating") {
  //     videogamesOrder = filtered.sort(
  //       (a, b) => b.rating - a.rating
  //     );
  //   }

  //     dispatch({
  //       type: "ORDER_DESC_RATING",
  //       payload: {
  //         videogamesOrder,
  //         name: type,
  //       },
  //     });
  // }
  
  
  // export const orderByCreator = (source) => (dispatch, getState) => {
  //   let videogames;
  //    if(source === "creado") {
  //      videogames = getState().videogames.filter(function (G) {
  //       return G.source === source
  //     });
  //    } 
      
  //    if(source === "Api") {
  //     videogames = getState().videogames.filter(function (G) {
  //       return G.source === source
  //    })
  //    }
  //   dispatch({
  //     type: "ORDER_BY_CREATOR",
  //     payload: {
  //       videogames,
  //       source,
  //     },
  //   });
  // };





  