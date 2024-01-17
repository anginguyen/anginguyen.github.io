import { Routes, Route } from 'react-router-dom';
import './css/App.css';
import NavBar from './js/NavBar';
import SideBar from './js/SideBar';
import Home from './js/Home';
import Experiences from './js/Experiences';
import Projects from './js/Projects';
import Skills from './js/Skills';

const routes = [
  {
    name: "Home", 
    path: "/",
    icon: require('./img/world-icon.png')
  },
  {
    name: "Experiences",
    path: "/experiences",
    icon: require('./img/computer-icon.png')
  },
  {
    name: "Projects",
    path: "/projects",
    icon: require('./img/notepad-icon.png')
  }
  // {
  //   name: "Skills",
  //   path: "/skills",
  //   icon: require('./img/skills-icon.png')
  // }
]

function App() {
  return (
    <>
      <SideBar routes={routes} />
      <NavBar routes={routes} />

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
