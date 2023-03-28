import React from 'react'
import './Card.css'
import {Link} from "react-router-dom"
function Cards({ rating, id, image, name, genre }) {
  return (
    <>
    <Link to={`/detail/${id}`}>
    <div className="card"  >
        <div className='imgC'>
          <img src={image} alt="" />
        </div>
        <div className="content">
            <h2>{name}</h2>
            <p >{genre}</p>
            <ion-icon name="analytics-outline"></ion-icon>   <span>  {rating}</span>
        </div>
    </div>
    </Link>
    </>
  )
}

export default Cards
