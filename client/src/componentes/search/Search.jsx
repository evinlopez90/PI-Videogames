import React, {useState} from 'react'
import {  useSelector } from 'react-redux';
import Cards from '../cards/Cards';
import NavBar from '../NavBar/NavBar';
import "./Search.css"
import Pagination from '../pagination/Pagination'
import Loading from "../loading/Loading"
// import { useNavigate } from 'react-router-dom';
function Search() {
  
    
    let filterResults = useSelector((state) => state.searchVideogameByName)

  

    let games = filterResults
    

    
  
    const [page, setPage] = useState(1);
    const [videogamesPerPage] = useState(15);
    let lastCardPerPage = page * videogamesPerPage;
    let firtsCardPerPage = lastCardPerPage - videogamesPerPage;
    let currentPageGames = games.slice(firtsCardPerPage, lastCardPerPage);
  
    function paginate (number, length) {
      if(typeof(number) !== "object") {
        setPage(number)
     } else {
       let nun = page + number.num
       setPage(nun)
     }
  
  
     if(page < 1) {
       setPage(1)
     }
  
     if(page > length) {
       setPage(length)
     }
  
  
     
  
    }




  return (
    <div className='sDiv'>
     <NavBar/>
       <div className='Rdivs'>
       <h2>Resultado de tu busqueda...</h2>
       </div>
       { currentPageGames.length ? currentPageGames.map(g => (
          <div key={g.id}>
             <Cards 
             id = {g.id}
          image = {g.image}
          name = {g.name}
          genre = {g.genres}
         
          />
          </div>
         ))  : <Loading/> }

<Pagination videogamesPerPage={videogamesPerPage} totalVideogames={games.length} paginate={paginate}/>
    </div>
  )
}

export default Search




