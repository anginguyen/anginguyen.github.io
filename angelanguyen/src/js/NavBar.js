import { useState } from 'react';
import { Navbar } from "react-bootstrap";
import '../css/NavBar.css';
import NavTabItem from "../components/js/NavTabItem";
import NavIconLink from "../components/js/NavIconLink";

import linkedin_icon from '../img/linkedin-icon.png';
import mail_icon from '../img/mail-icon.png';
import document_icon from '../img/document-icon.png';

function NavBar({ routes }) {
    const [isExpanded, setIsExpanded] = useState(false); 

    return (
        <>
            <Navbar className='nav-bar nav-bar__full'>
                <button className='nav-start-button button-shadow'>Start</button>

                <div className="nav-links">
                    <NavIconLink to="https://drive.google.com/file/d/1fe-SGPxBA6mPS5T-c2JtVKzVrKg05I0c/view?usp=sharing" icon={document_icon} alt="Document icon" />
                    <NavIconLink to="mailto:anginguyen@yahoo.com" icon={mail_icon} alt="Mail icon" />
                    <NavIconLink to="https://linkedin.com/in/angelatramnguyen" icon={linkedin_icon} alt="LinkedIn icon" />
                </div>

                <div className="nav-tab-items">
                    {routes.map((route) => 
                        <NavTabItem name={route.name} to={route.path} icon={route.icon} />
                    )}
                </div>
            </Navbar>

            <Navbar className="nav-bar nav-bar__dropdown">
                {
                    isExpanded && 
                    <div className="nav-items--expanded">
                        {routes.map((route) => 
                            <NavTabItem name={route.name} to={route.path} icon={route.icon} callback={() => setIsExpanded(!isExpanded)} />
                        )}
                    </div>
                }

                <button 
                    className={isExpanded ? 'nav-start-button nav-start-button--active button-shadow' : 'nav-start-button button-shadow'}
                    onClick={() => setIsExpanded(!isExpanded)}
                >
                    Menu
                </button>
            </Navbar>
        </>
    )
}

export default NavBar;