import React from 'react';
import './App.css';
import CreateGame from './componentes/createGame/CreateGame';
import { Route, Routes } from 'react-router-dom';
import Inicio from './componentes/Inicio/Inicio';
import Home from './componentes/home/Home';
import About from './componentes/abaut/About';
import Detail from './componentes/detail/Detail';
import Page404 from "./componentes/Page404/page404"

function App() {
  return (
    <div className="App">
     <Routes>
     <Route exact path='/' element= {<Inicio/>}/>
      <Route exact path='/home' element={<Home/>}/>
      <Route exact path='/create' element={<CreateGame/>}/>
      <Route exact path='/about' element={<About/>}/>
       <Route exact path='detail/:id' element={<Detail/>} />
     <Route exact path='/results' element={<Home/>} />
     <Route path='*'   element={<Page404/>}/>
     </Routes>
    </div>
  );
}

export default App;
