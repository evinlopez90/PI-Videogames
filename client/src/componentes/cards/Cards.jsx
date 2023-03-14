import React from 'react'
import './Card.css'
import {Link} from "react-router-dom"
function Cards({ id, image, name, genre }) {
  return (
    <>
    <Link to={`/detail/${id}`}>
    <div className="card" style={{backgroundImage: `url(${image})`, width: '250px', height: "280px" }  } >
        <div className="content">
            <h2>{name}</h2>
            <p >{genre}</p>
        </div>
    </div>
    </Link>
    </>
  )
}

export default Cards
