const initialState = {
    videogames: [],
    genres: [],
    defaultFilteredVideogames: [],
    createVideogame: null,
    searchVideogameById: [],
    searchVideogameByName: [],
    filteredVideogames: [],
    orderBy: "defaul",
    filterBy: "defaul",
    defaultVideogame: []
  };
  
  export default function rootReducer(state = initialState, action) {
    switch (action.type) {
      case "GET_VIDEOGAMES":
        return {
          ...state,
          videogames: action.payload,
          defaultVideogame: action.payload
        };
  
      case "SEARCH_VIDEOGAMES" :
        return {
          ...state,
          searchVideogameByName: action.payload,

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
        return {
          ...state,
          filteredVideogames: action.payload.videogameGenre,
          defaultFilteredVideogames: action.payload.videogameGenre,
          filterBy: action.payload.genre,
        };
  
  
      case "ORDER_ASC_RATING":
        return {
          ...state,
          filteredVideogames: action.payload.videogamesOrder,
          videogames: action.payload.videogamesOrder,
          orderBy: action.payload.name,
        };
      case "ORDER_DESC_RATING":
        return {
          ...state,
          filteredVideogames: action.payload.videogamesOrder,
          videogames: action.payload.videogamesOrder,
          searchVideogameByName: action.payload.videogamesOrder,
          orderBy: action.payload.name,
        };
  
      case "ORDER_BY_CREATOR":
      return {
        ...state,
        filteredVideogames: action.payload.videogames,
        videogames: action.payload.videogames,
        searchVideogameByName: action.payload.videogames,
        filterBy: action.payload.source,
      };
      
  
      default:
        return state;
    }
  };

