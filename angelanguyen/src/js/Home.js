import WindowBox from '../components/js/WindowBox';
import DesktopIcon from '../components/js/DesktopIcon';
import NavButton from '../components/js/NavButton';
import '../css/Home.css';

import linkedin_icon from '../img/linkedin-icon.png';
import mail_icon from '../img/mail-icon.png';
import document_icon from '../img/document-icon.png';

function Home() {
    return (
        <WindowBox name="Home" width={0.70} classes="home" content={
            <div className='window-content home-content'>
                <div className="title">
                    <div className="title-left">
                        <p className="name-intro">Hello! I'm</p>
                        <p className="name">Angela Nguyen</p>
                    </div>
                </div>

                <div className="home-content-box">
                    <p>I recently graduated from USC with a Bachelor of Science in Computer Science in May. My interests include puzzle games (especially the NYT games and Echo Chess), board games, bouldering, tennis, and hiking :D</p>
                    <br />
                    <p>This past summer, I returned to Apple as a SWE intern under the Siri Communications team. I interned under the Global Siri team the previous summer and at Amazon in Summer 2021. </p>
                    <span className="non-laptop-note">
                        <br />
                        <p>For the best experience, access this page on your computer!</p>
                    </span>

                    <div className="links">
                        <DesktopIcon name="Resume" to="https://drive.google.com/file/d/1fe-SGPxBA6mPS5T-c2JtVKzVrKg05I0c/view?usp=sharing" icon={document_icon} defaultClass="home-icon" type="link" />
                        <DesktopIcon name="Email" to="mailto:anginguyen@yahoo.com" icon={mail_icon} defaultClass="home-icon" type="link"/>
                        <DesktopIcon name="LinkedIn" to="https://linkedin.com/in/angelatramnguyen" icon={linkedin_icon} defaultClass="home-icon" type="link" />
                    </div>
                </div>

                <div className='nav-buttons'>
                    <NavButton to="/experiences" type="next" />
                </div>
            </div>
        } />
    )
}

export default Home;