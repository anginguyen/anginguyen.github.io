import { NavLink, Link } from 'react-router-dom';
import '../css/DesktopIcon.css';

function DesktopIcon({ name, icon, to, type, defaultClass, activeClass }) {
    defaultClass = "desktop-icon " + defaultClass;
    const alt = name + " icon";
    
    switch (type) {
        case 'nav':
            activeClass = "desktop-icon " + activeClass;
            return (
                <NavLink to={to} className={({ isActive }) => isActive ? activeClass : defaultClass}>
                    <img src={icon} alt={alt} />
                    <mark>{name}</mark>
                </NavLink>
            )

        case 'link':
            return (
                <Link to={to} className={defaultClass} target="_blank">
                    <img src={icon} alt={alt} />
                    <mark>{name}</mark>
                </Link>
            )

        case 'nolink':
            return (
                <div className={defaultClass}>
                    <img src={icon} alt={alt} />
                    <mark>{name}</mark>
                </div>
            )

        default: 
            return (<></>)
    }
}



export default DesktopIcon;