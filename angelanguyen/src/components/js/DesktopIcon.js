import { NavLink, Link } from 'react-router-dom';
import '../css/DesktopIcon.css';

function DesktopIcon(props) {
    const defaultClass = "desktop-icon " + props.defaultClass;
    const alt = props.name + " icon";
    
    switch (props.type) {
        case 'nav':
            const activeClass = "desktop-icon " + props.activeClass;
            return (
                <NavLink to={props.to} className={({ isActive }) => isActive ? activeClass : defaultClass}>
                    <img src={props.icon} alt={alt} />
                    <mark>{props.name}</mark>
                </NavLink>
            )

        case 'link':
            return (
                <Link to={props.to} className={defaultClass} target="_blank">
                    <img src={props.icon} alt={alt} />
                    <mark>{props.name}</mark>
                </Link>
            )

        case 'nolink':
            return (
                <div className={defaultClass}>
                    <img src={props.icon} alt={alt} />
                    <mark>{props.name}</mark>
                </div>
            )

        default: 
            return (<></>)
    }
}



export default DesktopIcon;