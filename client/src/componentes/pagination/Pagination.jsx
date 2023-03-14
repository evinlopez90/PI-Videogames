/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react'

import "./Pagination.css"

function Pagination({ videogamesPerPage, totalVideogames, paginate }) {

  const pageNumbers = [];
  const numOfPages = Math.ceil(totalVideogames / videogamesPerPage)

  for (let i = 1; i <= numOfPages ; i++) {
    pageNumbers.push(i);
  }

  return (
   <div className='pagination'>
    <button onClick={() => paginate({num: -1}, pageNumbers.length)}></button>
    <ul className="ulP">
    {pageNumbers.map((num) => (
      <li key={num} className="item">
        <a onClick={() => paginate(num)}>
          {num}
        </a>
      </li>
    ))}
</ul>

 <button className='btn' onClick={() => paginate({num: +1}, pageNumbers.length)}></button>
   </div>
  )
}

export default Pagination


