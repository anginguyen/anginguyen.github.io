import { Link } from 'react-router-dom';
import '../css/NavIconLink.css';

function NavIconLink(props) {
    return (
        <Link to={props.to} className="nav-icon-link" target="_blank">
            <img src={props.icon} alt={props.alt} className="nav-icon-link-icon" />
        </Link>
    )
}

export default NavIconLink;