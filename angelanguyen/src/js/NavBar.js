import { Navbar } from "react-bootstrap";
import '../css/NavBar.css';
import NavTabItem from "../components/js/NavTabItem";
import NavIconLink from "../components/js/NavIconLink";

import world_icon from '../img/world-icon.png';
import computer_icon from '../img/computer-icon.png';
import notepad_icon from '../img/notepad-icon.png';
import skills_icon from '../img/skills-icon.png';
import linkedin_icon from '../img/linkedin-icon.png';
import mail_icon from '../img/mail-icon.png';
import document_icon from '../img/document-icon.png';

function NavBar() {
    return (
        <Navbar className='nav-bar'>
            <button className='nav-start-button button-shadow'>Start</button>

            <div className="nav-links">
                <NavIconLink to="https://drive.google.com/file/d/1fe-SGPxBA6mPS5T-c2JtVKzVrKg05I0c/view?usp=sharing" icon={document_icon} alt="Document icon" />
                <NavIconLink to="mailto:anginguyen@yahoo.com" icon={mail_icon} alt="Mail icon" />
                <NavIconLink to="https://linkedin.com/in/angelatramnguyen" icon={linkedin_icon} alt="LinkedIn icon" />
            </div>

            <div className="nav-tab-items">
                <NavTabItem name="Home" to='/' icon={world_icon} alt="World icon" />
                <NavTabItem name="Experiences" to='/experiences' icon={computer_icon} alt="Computer icon" />
                <NavTabItem name="Projects" to='/projects' icon={notepad_icon} alt="Notepad icon" />
                {/* <NavTabItem name="Skills" to='/skills' icon={skills_icon} alt="Skills icon" /> */}
            </div>
        </Navbar>
    )
}

export default NavBar;