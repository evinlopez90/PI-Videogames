/* eslint-disable no-fallthrough */

const initialState = {
    videogames: [],
    genres: [],
    createVideogame: null,
    searchVideogameById: [],
    defaultVideogame: [],
    videogamesfilter: [],
    typegenre: ""

  };


  
  
  export default function rootReducer(state = initialState, action) {
    switch (action.type) {
      case "GET_VIDEOGAMES":
        return {
          ...state,
          videogames:  action.payload,
          defaultVideogame: action.payload,
          
        };
        case "ORDER":
          return {
            ...state,
            videogamesOrder: action.payload
          }
      case "SEARCH_VIDEOGAMES" :
         return {
          ...state,
          videogames:  action.payload,
          defaultVideogame: action.payload,
          
        };
  
      case "GET_VIDEOGAME_BY_ID":
        return {
          ...state,
          searchVideogameById: action.payload,
        };
  
      case "GET_GENRES":
        return {
          ...state,
          genres: action.payload,
        };
  
      case "CREATE_VIDEOGAME":
        return {
          ...state,
          createVideogame: action.payload,
        };    
     case "FILTER_BY_GENRE":
       if(action.payload !== "default") {
           return {
            ...state,
               videogames: [...state.videogames].filter(g => g.genres.includes(action.payload)),
               typegenre: action.payload
           }
       } else {
          if(state.videogames.length !== state.defaultVideogame.length){
            return {
              ...state,
                 videogames: [...state.defaultVideogame]
             }
          } else {
            return {
              ...state,
                 videogames: state.typegenre.length ? [...state.defaultVideogame].filter(g => g.genres.includes(state.typegenre)) : [...state.videogames]
             }
          }
          
       }
      case "RATING":
        if(action.payload === "relevance" ) {
          return {
            ...state,
            videogames: [...state.videogames].sort(
              (a, b) => b.rating - a.rating
            )
          }
        }
        else if(action.payload === "default") {
          if(state.videogames.length === state.defaultVideogame.length){
            return {
              ...state,
                 videogames: [...state.defaultVideogame]
             }
          } else {
            return {
              ...state,
                 videogames: state.typegenre.length ? [...state.defaultVideogame].filter(g => g.genres.includes(state.typegenre)) : [...state.videogames]
             }
          }
        } else if(action.payload === "less relevance") {
           return{
             ...state,
             videogames: [...state.videogames].sort(
              (a, b) => a.rating - b.rating
            )
           }
        };
      // eslint-disable-next-line no-fallthrough
      case "ALFABETIC":
      if(action.payload === "default") {
        if(state.videogames.length === state.defaultVideogame.length){
          return {
            ...state,
               videogames: [...state.defaultVideogame]
           }
        } else {
          return {
            ...state,
               videogames: [...state.videogames]
           }
        }
      } 
      else if(action.payload === "a-z") {
          return {
            ...state,
            videogames: [...state.videogames].sort((a, b) => {
              if (a.name > b.name) return 1;
             if (a.name < b.name) return -1;
          return 0;
             })
          }
      } else {
        return {
          ...state,
          videogames: [...state.videogames].sort((a, b) => {
            if (a.name < b.name) return 1;
           if (a.name > b.name) return -1;
        return 0;
           })
        }
      };
     case "CREATE_OR_API":
      let videogames;
     if(action.payload === "create") {
       videogames = state.defaultVideogame.filter(function (G) {
        return G.source === action.payload
      });
     } 
      
    else if(action.payload === "Api") {
      videogames = state.defaultVideogame.filter(function (G) {
        return G.source === action.payload
     })
     } else {
        videogames = state.defaultVideogame
     }
      return {
        ...state,
        videogames: videogames
      }

      default: 
        return state;
    }
  };

