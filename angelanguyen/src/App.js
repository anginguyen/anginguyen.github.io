import { Routes, Route } from 'react-router-dom';
import './css/App.css';
import NavBar from './js/NavBar';
import SideBar from './js/SideBar';
import Home from './js/Home';
import Experiences from './js/Experiences';
import Projects from './js/Projects';
import Skills from './js/Skills';

function App() {
  return (
    <>
      <SideBar />
      <NavBar />
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/experiences' element={<Experiences/>} />
        <Route path='/projects' element={<Projects/>} />
        {/* <Route path='/skills' element={<Skills/>} /> */}
      </Routes>
    </>
  );
}

export default App;
