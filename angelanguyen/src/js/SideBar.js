import { Navbar } from "react-bootstrap";
import '../css/SideBar.css';
import DesktopIcon from '../components/js/DesktopIcon';
import world_icon from '../img/world-icon.png';
import computer_icon from '../img/computer-icon.png';
import notepad_icon from '../img/notepad-icon.png';
import skills_icon from '../img/skills-icon.png';

function SideBar() {
    return (
        <Navbar className="sidebar">
            <DesktopIcon name="Home" to='/' icon={world_icon} defaultClass="sidebar-item" activeClass="sidebar-item sidebar-active" type="nav" />
            <DesktopIcon name="Experiences" to='/experiences' icon={computer_icon} defaultClass="sidebar-item" activeClass="sidebar-item sidebar-active" type="nav" />
            <DesktopIcon name="Projects" to='/projects' icon={notepad_icon} defaultClass="sidebar-item" activeClass="sidebar-item sidebar-active" type="nav" />
            {/* <DesktopIcon name="Skills" to='/skills' icon={skills_icon} defaultClass="sidebar-item" activeClass="sidebar-item sidebar-active" type="nav" /> */}
        </Navbar>
    )
}

export default SideBar;