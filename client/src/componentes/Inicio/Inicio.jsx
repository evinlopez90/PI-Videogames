/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react'
import './Inicio.css'
import image from "../../imagenes/welcome.png"
import {useNavigate} from "react-router-dom"


function Inicio() {
 
let navigate = useNavigate()
  return (
    <div class="containerI">
      <div className='caja1I'>
        <div className='divsI'>
            <h1 className='h1I'>Hey!</h1>
            <h1 className='h12I'>Welcome</h1>
        </div>
        <div className='divsI'>
           <p>
           Complete video game data:
             descriptions, genres, release dates, ratings, and platforms.
             In this project you can search for video games,
            visualize the information of the videogames, filter them sort them and Create new video games.
            </p>
        </div>

        <div className='divsI'>
            
            <button onClick={() => {
              navigate("/home")
            }}>
                <a>Begin</a>
            </button>
            
        </div>
        
      </div>

      <div className='caja2I'> 
           <img src={image} alt="" />
       </div>
   </div>
  )
}

export default Inicio
