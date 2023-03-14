import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'
import "./Detail.css"
import {getVideogameById} from "../../accions/index"

function Detail() {
 let {id} = useParams()

let dispatch = useDispatch()

useEffect(() => {
    dispatch(getVideogameById(id))
// eslint-disable-next-line react-hooks/exhaustive-deps
},[])

let game = useSelector((state) => state.searchVideogameById)



  return (
   <div >
     <div className='detail' >
       <div className="contenD" style={{backgroundImage: `url(${game.image})`}}>

        <div className='inf'>
        <div className='divsD'>
            <h3>name</h3>
            <p>{game.name}</p>
         </div>

        <div className='divsD' >
            <h3>Description</h3>
            <p>{game.description}</p>
         </div>

         <div className='divsD'>
            <h3>Genre</h3>
            <p>{game.genres}</p>
         </div>


         <div className='divsD'>
            <h3>Platforms</h3>
            <p>{game.platforms}</p>
         </div>


         <div className='divsD'>
            <h3>released</h3>
            <p>{game.released}</p>
         </div>

         <div className='divsD'>
            <h3>Rating</h3>
            <p>{game.rating}</p>
         </div>

         <div className='divsD'>
            <h3>ID</h3>
            <p>{game.id}</p>
         </div>
        </div>

       </div>
    </div>
   </div>
  )
}

export default Detail