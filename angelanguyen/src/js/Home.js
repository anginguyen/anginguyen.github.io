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
                    <p>I am currently a software engineer at Apple working on the Siri ChatGPT integration and Siri Health. I graduated from USC with a Bachelor of Science in Computer Science in May 2024.</p>
                    <br />
                    <p>My interests and hobbies include puzzle games (especially the NYT games and Echo Chess), board games, volleyball, tennis, and hiking :D</p>
                    <span className="non-laptop-note">
                        <br />
                        <p>For the best experience, access this page on your computer!</p>
                    </span>

                    <div className="links">
                        <DesktopIcon name="Resume" to="https://drive.google.com/file/d/1fe-SGPxBA6mPS5T-c2JtVKzVrKg05I0c/view?usp=sharing" icon={document_icon} defaultClass="home-icon" type="link" />
                        <DesktopIcon name="Email" to="mailto:angelanguyen423@gmail.com" icon={mail_icon} defaultClass="home-icon" type="link"/>
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