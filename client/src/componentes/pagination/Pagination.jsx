/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react'

import "./Pagination.css"

function Pagination({ videogamesPerPage, totalVideogames, paginate, page }) {
  
  const pageNumbers = [];
  const numOfPages = Math.ceil(totalVideogames / videogamesPerPage)

  for (let i = 1; i <= numOfPages ; i++) {
    pageNumbers.push(i);
  }

  return (
   <div className='pagination'>
    { totalVideogames > 1  ? <button onClick={() => paginate({num: -1}, pageNumbers.length)}></button> : null}
    <ul className="ulP">
    {pageNumbers.map((num) => (
      <li key={num} >
        <a onClick={() => paginate(num)}  className={num === page ? "active" : ""} >
          {num}
        </a>
      </li>
    ))}
</ul>

 {totalVideogames > 1 ? <button className='btn' onClick={() => paginate({num: +1}, pageNumbers.length)}></button> : null}
   </div>
  )
}

export default Pagination


