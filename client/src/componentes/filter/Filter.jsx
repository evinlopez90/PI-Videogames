/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect } from 'react'
import {useDispatch, useSelector} from 'react-redux'
import './Filter.css'
import {getGenres,
     filterByGenre,
      orderByCreator, 
      orderAsc,
      orderDesc, getVideogames
} from '../../accions/index'
import { useLocation } from 'react-router-dom'
function Filter() {

    const dispatch = useDispatch()
    let location = useLocation()

    const genres = useSelector((state) => state.genres)
    
    useEffect(() => {
        dispatch(getGenres())
        dispatch(getVideogames())
    }, [])
    let locat;
    if(location.pathname === "/home") {
        locat = "home"
    } 
    console.log(location.pathname)
    if(location.pathname === "/resuls") {
        locat = "results"
    }
    console.log(locat)
    // filtrar
    const handleSelect = (e) => {
       if(e.target.value === 'creado' || e.target.value === 'Api' ) {
        dispatch(orderByCreator(e.target.value, locat))
        dispatch(getVideogames())
        
       } else {
        dispatch(filterByGenre(e.target.value, locat))
        dispatch(getVideogames())
       
       }
    }
     // ordenar
    const handleSelect2 = (e) => {
       if(e.target.value === 'asc_name' || e.target.value === 'asc_rating' || e.target.value === "default") {
        dispatch(orderAsc(e.target.value, locat))
        dispatch(getVideogames())
        
       } else if (
          e.target.value === 'desc_name' || e.target.value === 'desc_rating' || e.target.value === "default"
       ) {
        dispatch(orderDesc(e.target.value, locat))
        dispatch(getVideogames())
       
       } else {
        dispatch(filterByGenre(e.target.value, locat))
        dispatch(getVideogames())
       
       }
    }

   
    return (
        <div className='container-div'>
            <select  className="selectCont" onChange={handleSelect} name="" id="">
                <option className="option" value="default">Filter by:</option>
                    <option className="option" value="creado">Created</option>
              
                    <option className="option" value="Api">Api</option>         
                <optgroup className="optionGroup" label="Generos">
                    {genres && genres.map(g => <option key={g.name} value={g.name}>{g.name}</option>)}
                </optgroup>                
            </select>
            <select  className="selectCont" onChange={handleSelect2} name="" id="">
                <option className="option" value="default">Order</option>
    
                    <option className="option" value="asc_rating">less relevance</option>
                    <option className="option" value="desc_rating">Relevance</option>             
                    <option className="option" value="asc_name">a - z</option>
                    <option className="option" value="desc_name">z - a</option>
                   
            </select>
        </div>
    )
}

export default Filter
