import { Navbar } from "react-bootstrap";
import '../css/SideBar.css';
import DesktopIcon from '../components/js/DesktopIcon';

function SideBar(props) {
    return (
        <Navbar className="sidebar">
            {(props.routes).map((route) =>
                <DesktopIcon name={route.name} to={route.path} icon={route.icon} defaultClass="sidebar-item" activeClass="sidebar-item sidebar-active" type="nav" />
            )}
        </Navbar>
    )
}

export default SideBar;