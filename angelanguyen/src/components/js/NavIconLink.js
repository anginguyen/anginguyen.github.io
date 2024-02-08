import { Link } from 'react-router-dom';
import '../css/NavIconLink.css';

function NavIconLink({ icon, to, alt}) {
    return (
        <Link to={to} className="nav-icon-link" target="_blank">
            <img src={icon} alt={alt} className="nav-icon-link-icon" />
        </Link>
    )
}

export default NavIconLink;