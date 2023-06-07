import './App.css';
import { Routes, Route } from 'react-router-dom';
import { useLocation } from 'react-router-dom';
// import { useDispatch } from 'react-redux';
import { LandingPage, HomePage, DetailPage, FormPage } from './views/index';
// import { getVideogamesByName } from './redux/actions';
import Nav from './components/nav/Nav';

function App() {

  const location = useLocation();
  // const dispatch = useDispatch();

  // const handleSearch = (name) => {
  //   dispatch(getVideogamesByName(name))
  //     .catch((error) => {
  //       console.error(error);
  //     });
  // }

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
