import React, { useEffect} from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getGenres, getVideogames } from '../../accions'
import NavBar from '../NavBar/NavBar'
// import Paginacion from '../paginacion/Paginacion'
import Videogames from '../videogames/Videogames'
// import ReactSwitch from "react-switch"
// import { useContextProvider } from '../../context/TemaContext'
import "../../App.css"
function Home() {
  let dispatch = useDispatch()



  let {defaultVideogame} = useSelector((state) => state)

  useEffect(() => {
    if(defaultVideogame.length === 0) {
      dispatch(getVideogames())
      dispatch(getGenres())
    }
  },[dispatch, defaultVideogame.length])

//  let [[themeC, setThemeC]] = useContextProvider()

// const [check, setCheck] = useState(false)
// function handleChange (nextChecked) {
//   setThemeC((state) => state === "Ligth" ? "Dark" : "Ligth")
//    setCheck(nextChecked)
// }
 
// console.log(check)

  return (
    < >

      
      <NavBar/>
      {/* <ReactSwitch
       onChange={handleChange}
       checked={check}
       onColor="#86d3ff"
       onHandleColor="#2693e6"
       handleDiameter={30}
       uncheckedIcon={false}
       checkedIcon={false}
       boxShadow="0px 1px 5px rgba(0, 0, 0, 0.6)"
       activeBoxShadow="0px 0px 1px 10px rgba(0, 0, 0, 0.2)"
       height={20}
       width={48}
       className="react-switch"
       id="material-switch"
      /> */}
      <Videogames/>
    </>
  )
}

export default Home
