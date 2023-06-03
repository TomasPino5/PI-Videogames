import './App.css';
import { Routes, Route } from 'react-router-dom';
import { useLocation } from 'react-router-dom';
// import { useState } from 'react';
// import axios from 'axios';
import { LandingPage, HomePage, DetailPage, FormPage } from './views/index';
import Nav from './components/nav/Nav';

function App() {

  // const [videogames, setVideogames] = useState([]);

  // async function onSearch(name) {
  //   try {
  //     const { data } = await axios(`http://localhost:3001/videogames/${name}`)
  //     if (data.id) {
  //       setVideogames((oldVg) => [...oldVg, data]);
  //     } else {
  //       alert('¡No hay videojuegos con este nombre!');
  //     }
  //   } catch (error) {
  //     throw new Error(error.message);
  //   }
  // }

  const location = useLocation();

  return (
    <div className="App">
      {location.pathname !== '/' && <Nav />}
      <Routes>
        <Route path='/' element={<LandingPage />}/>
        <Route path='/home' element={<HomePage />}/>
        <Route path='/detail' element={<DetailPage />}/>
        <Route path='/form' element={<FormPage />}/>
      </Routes>
    </div>
  );
}

export default App;
