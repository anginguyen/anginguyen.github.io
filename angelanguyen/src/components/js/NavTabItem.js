import { NavLink } from 'react-router-dom';
import '../css/NavTabItem.css';

function NavTabItem({ name, to, icon, callback }) {
    const alt = name + " icon";
    
    return (
        <NavLink to={to} className={({ isActive }) => isActive ? "nav-tab-item nav-active" : "nav-tab-item button-shadow"} onClick={callback}>
            <img src={icon} className="nav-tab-icon desktop-icon" alt={alt} />
            {name}
        </NavLink>
    )
}

export default NavTabItem;