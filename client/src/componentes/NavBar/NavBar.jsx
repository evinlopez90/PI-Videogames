/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useState } from "react";
import { NavLink, useLocation, useNavigate } from "react-router-dom";
import "./NavBar.css";
import { useDispatch } from "react-redux";
import { getVideogames, searchVideogames } from "../../accions/index";
import Filter from '../filter/Filter'
function NavBar() {
  const dispatch = useDispatch();
  const [name, setName] = useState("");
   const [abierto, setAbierto] = useState(true)
  let navigate = useNavigate();

  function hanledChange(e) {
    setName(e.target.value);
  }

  let location = useLocation();

  function handleSubmit(e) {
    e.preventDefault();
    navigate("/results");
    dispatch(searchVideogames(name));
    setName("");
  }

  return (
    <div   style={{width: abierto === false ? "12%" : ""}} className="navBar">
       <div className="habierto">
        <span className="abrir" >
        {abierto === false ? <ion-icon  onClick={() => setAbierto(true)} name="reorder-four-sharp"></ion-icon> : ""}
        </span>
       
        <span className="cerrar">
        {abierto === true ? <ion-icon onClick={() => setAbierto(false)} name="close-circle-sharp"></ion-icon> : ""}  
        </span>

       </div>
      <div className="searchbar">
        <form onSubmit={(e) => handleSubmit(e)}>
          {abierto === false ? "" : <input
            value={name}
            onChange={(e) => hanledChange(e)}
            placeholder=" Search videogame..."
            type="text"
          ></input>}

          <button   style={{marginLeft: abierto === false ? "13px" : "", border: abierto === false ? "none" : ""}} name="name" type="submit">
          <ion-icon name="search-outline"></ion-icon>
          </button>
        </form>
      </div>

      <nav className="navs">
        <ul className="navsUl">
          <li className="videogames">
            <NavLink to="/">
            <ion-icon name="game-controller-sharp"></ion-icon>  <a style={{transition: "0.3s"}} >
                
              {abierto === false ? "" :"Start" }
              </a>
            </NavLink>
          </li>
          <li className={location.pathname === "/home" ? "activo" : "home"}>
            <NavLink to="/home">
            <ion-icon  name="home-sharp"></ion-icon>   <a style={{transition: "0.3s"}}
                onClick={() => {
                  dispatch(getVideogames());
                }}
              >
               {abierto === false ? "" :"Home" }
              </a> 
            </NavLink>
          </li>
          <li className={location.pathname === "/create" ? "activo" : "create"}>
            <NavLink to="/create">
            <ion-icon name="add-circle-outline"></ion-icon>    <a  style={{transition: "0.3s"}}> {abierto === false ? "" :"Create" }</a>
            </NavLink>
          </li>
          <li className={location.pathname === "/about" ? "activo" : "about"}>
            <NavLink to="/about">
            <ion-icon name="briefcase-sharp"></ion-icon>    <a  style={{transition: "0.3s"}}>{abierto === false ? "" :"About" }</a>
            </NavLink>
          </li>
        </ul>

        
      </nav>
      
      {abierto === false ? "" : <Filter/> }
    </div>
  );
}

export default NavBar;
