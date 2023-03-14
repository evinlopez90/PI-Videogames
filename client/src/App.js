import React from 'react';
import './App.css';
import CreateGame from './componentes/createGame/CreateGame';
import { Route, Routes } from 'react-router-dom';
import Inicio from './componentes/Inicio/Inicio';
import Home from './componentes/home/Home';
import About from './componentes/abaut/About';
import Search from './componentes/search/Search';
import Detail from './componentes/detail/Detail';


function App() {
  return (
    <div className="App">
     <Routes>
     <Route exat path='/' element= {<Inicio/>}/>
      <Route exat path='/home' element={<Home/>}/>
      <Route exat path='/create' element={<CreateGame/>}/>
      <Route exat path='/about' element={<About/>}/>
       <Route exat path='detail/:id' element={<Detail/>} />
     <Route exat path='/results' element={<Search/>} />
     </Routes>
    </div>
  );
}

export default App;
