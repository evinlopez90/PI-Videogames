/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useState} from 'react'
import {  NavLink, useLocation, useNavigate} from 'react-router-dom';
import './NavBar.css';
import { useDispatch} from 'react-redux'
import { searchVideogames } from "../../accions/index";

function NavBar() {
     const dispatch = useDispatch();
    const [name, setName]  = useState('')
  let navigate = useNavigate()

  function hanledChange (e) {
    setName(e.target.value)
  }
    
let location = useLocation()


    function handleSubmit(e) {
		e.preventDefault();
     navigate("/results")
     dispatch(searchVideogames(name));
		setName('');
    
	}


  return (
    <div className='navBar'>
    <nav className='navs'>
    <ul className='navs'>
    <li   className= 'videogames' >
      <NavLink to='/'>
        <a >Start</a>
      </NavLink>
    </li>
    <li className={location.pathname === "/home" ? 'activo' : "home" } >
      <NavLink to='/home'>
        <a  >Home</a>
      </NavLink>
    </li>
    <li className={location.pathname === "/create" ? 'activo' : "create" }  >
      <NavLink to='/create'>
        <a>Create</a>
      </NavLink>
    </li>
    <li className={location.pathname === "/about" ? 'activo' : "about" } >
      <NavLink to='/about'>
        <a>About</a>
      </NavLink>
    </li>
    </ul>
    </nav>
    <div className='searchbar'>
      <form onSubmit={(e) => handleSubmit(e)}>
        <input
          value={name}
          onChange={(e) => hanledChange(e)}
          placeholder=' Search videogame...'
          type='text'
        ></input>
        
         
         <button name='name' type='submit' >
            Search!
          </button>
        
      </form>
    </div>
  </div>
  )
}

export default NavBar

