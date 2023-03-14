/* eslint-disable react-hooks/exhaustive-deps */
import React, {  useState } from 'react'
import  imagen from '../../imagenes/CG.png'
import './Videogames.css'
import {  useSelector } from 'react-redux'

import Cards from '../cards/Cards'
import Filter from '../filter/Filter'
import Pagination from '../pagination/Pagination'
import Loading from '../loading/Loading'
function Videogames() {
 
  let videoGames = useSelector((state) => state.videogames)
  let filterGames = useSelector((state) => state.filteredVideogames)
   
  let games;


  if(filterGames.length  === 0) {
    games = videoGames
  } else {
    games = filterGames
  }
 
  




  

// paginacion 
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
      <div className='VContainer'>
        <div className='Vcaja1'>
         <div>
          <img src={imagen} alt="" />
         </div>
  
         <div className='texto'>
          <h1>Explore all the games offered by the RAWG Database API</h1>
         </div>
        </div>
  
        <hr />

        <Filter   />
  
        <div className='Vcaja2'>
           { currentPageGames.length ? currentPageGames.map(g => (
            <div key={g.id}>
               <Cards 
            id = {g.id}
            image = {g.image}
            name = {g.name}
            genre = {g.genres}
           
            />
            </div>
           ))  : <Loading/>}
        </div>
      
        <Pagination videogamesPerPage={videogamesPerPage} totalVideogames={games.length} paginate={paginate}/>
  
      </div>
    )
     }
  
   
   


export default Videogames
