import { Navbar } from "react-bootstrap";
import '../css/NavBar.css';
import NavTabItem from "../components/js/NavTabItem";
import NavIconLink from "../components/js/NavIconLink";

import linkedin_icon from '../img/linkedin-icon.png';
import mail_icon from '../img/mail-icon.png';
import document_icon from '../img/document-icon.png';

function NavBar(props) {
    return (
        <>
            <Navbar className='nav-bar nav-bar-expanded'>
                <button className='nav-start-button button-shadow'>Start</button>

                <div className="nav-links">
                    <NavIconLink to="https://drive.google.com/file/d/1fe-SGPxBA6mPS5T-c2JtVKzVrKg05I0c/view?usp=sharing" icon={document_icon} alt="Document icon" />
                    <NavIconLink to="mailto:anginguyen@yahoo.com" icon={mail_icon} alt="Mail icon" />
                    <NavIconLink to="https://linkedin.com/in/angelatramnguyen" icon={linkedin_icon} alt="LinkedIn icon" />
                </div>

                <div className="nav-tab-items">
                    {(props.routes).map((route) => 
                        <NavTabItem name={route.name} to={route.path} icon={route.icon} />
                    )}
                </div>
            </Navbar>

            <Navbar className="nav-bar nav-bar-collapsed">
                <button className='nav-start-button button-shadow'>Menu</button>
            </Navbar>
        </>
    )
}

export default NavBar;