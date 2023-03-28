/* eslint-disable react-hooks/exhaustive-deps */
import React, {  useState } from 'react'
import './Videogames.css'
import {   useSelector } from 'react-redux'
import logo from "../../imagenes/game.png"
import Cards from '../cards/Cards'
import Pagination from '../pagination/Pagination'
import Loading from '../loading/Loading'


function Videogames() {

  let videogames = useSelector((state) => state.videogames)
  const [page, setPage] = useState(1);
	const [videogamesPerPage] = useState(15);

console.log(videogames);
 if(typeof videogames === "string") {

    return (
          <div className='noVideo'>
          <div className='Vcaja1'>
         <div>
          <img src={logo} alt="" />
         </div>
        </div>
         <div className='noGames'>
         <h1 >No  videogames</h1>
         </div>
      </div>
    )
 } else {
   
// paginacion 
 
  let lastCardPerPage = page * videogamesPerPage;
	let firtsCardPerPage = lastCardPerPage - videogamesPerPage;
	let currentPageGames = videogames.slice(firtsCardPerPage, lastCardPerPage);

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
   let imaDefault = "https://www.shutterstock.com/image-vector/default-image-icon-vector-missing-260nw-2086941550.jpg"

   

   
    return (
      <div className='VContainer'>

        <>
         <div className='Vcaja1'>
         <div>
          <img src={logo} alt="" />
         </div>
        </div>
  
        </>
       
      
       

       
  
        <div className='Vcaja2'>
           { currentPageGames.length ? currentPageGames.map(g => (
            <div key={g.id}>
               <Cards 
            id = {g.id}
            image = {g.image ? g.image : imaDefault }
            name = {g.name}
            genre = {g.genres}
            rating = {g.rating}
           
            />
            </div>
           ))  : <Loading/> }
        </div>
      
        <Pagination
         videogamesPerPage={videogamesPerPage} 
         totalVideogames={videogames.length}
          paginate={paginate}
          page={page}/>
         
      </div>
    )
 }



  

     }
    
   
   


export default Videogames
