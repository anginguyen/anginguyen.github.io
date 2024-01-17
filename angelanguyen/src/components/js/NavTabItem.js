import { NavLink } from 'react-router-dom';
import '../css/NavTabItem.css';

function NavTabItem(props) {
    const alt = props.name + " icon";
    
    return (
        <NavLink to={props.to} className={({ isActive }) => isActive ? "nav-tab-item nav-active" : "nav-tab-item button-shadow"}>
            <img src={props.icon} className="nav-tab-icon desktop-icon" alt={alt} />
            {props.name}
        </NavLink>
    )
}

export default NavTabItem;