
import React, {useState} from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { createOrApi, filterByGenre, rating, alfabetic, } from '../../accions'
import styles from "./Filter.module.css"



function Filter() {
    let dispatch = useDispatch()
   
    let genres = useSelector((state) => state.genres)
     


    const [habilit, sethabilit] = useState({
        habi: "default"
    })
  
    


   const  hanledOpcions = (e) => {
     if(e.target.name === "apiOrCreate") {
        dispatch(createOrApi(e.target.value))
        sethabilit({
            ...habilit,
            habi: e.target.value
        })
        if(e.target.value === "default") {
      
        }
     }
     else if(e.target.name === "rating") {
        sethabilit({
            ...habilit,
            habi: e.target.value
        })

        dispatch(rating(e.target.value))
     }
     else if(e.target.name === "genres") {
        dispatch(filterByGenre(e.target.value))
        sethabilit({
            ...habilit,
            habi: e.target.value
        })
       
     }
     else if(e.target.name === "alfabetic") {
        dispatch(alfabetic(e.target.value))
        sethabilit({
            ...habilit,
            habi: e.target.value
        })
        
     }
     console.log(e.target.name)
   }

   
    return (
       <div className={styles.container}>
<div className={styles.select}>
   <select name="genres"  onChange={(e) => hanledOpcions(e)} >
      <option className='defautl' value="default">Genres</option>
     {genres && genres.map(g => (
        <>
      <option value={g.name}  >{g.name}</option> 
      
        </>
     ))}
   </select>
</div>

<div className={styles.select}>
   <select  name="rating"  onChange={(e) => hanledOpcions(e)}>
      <option className='defautl' value="default">Rating</option>
      <option value="relevance" >relevance</option>
      <option value="less relevance" >less relevance</option>
   </select>
</div>   

<div className={styles.select}>
   <select name="alfabetic"   onChange={(e) => hanledOpcions(e)}>
      <option className='defautl' value="default">Alfabetic</option>
      <option value="a-z">a-z</option>
      <option value="z-a" >z-a</option>
   </select>
</div>

<div className={styles.select}>
   <select name="apiOrCreate"  onChange={(e) => hanledOpcions(e)}>
      <option className='defautl' value="default" >Api or create</option>
      <option value="Api">Api</option>
      <option value="create">Create</option>
     
   </select>
</div>
       </div>
    )
}

export default Filter
