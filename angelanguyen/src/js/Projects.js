import { TabList, TabPanel, Tabs, Tab } from "react-tabs";
import 'react-tabs/style/react-tabs.css';
import WindowBox from "../components/js/WindowBox";
import ProjectTab from '../components/js/ProjectTab';
import NavButton from "../components/js/NavButton";
import '../css/Projects.css';

const projects = [
    {
        name: "Axle",
        src: require('../img/axle.png'),
        skills: "React.js, PostgreSQL, JavaScript, HTML, CSS",
        date: "Apr 2024",
        link: {
            label: "Website",
            url: "https://axlemarket.vercel.app"
        },
        description: [
            "Co-founded Axle, an e-commerce site for car parts, with a designer and product manager",
            "Developed end-to-end ordering process, including the search, shopping cart, checkout, and order history"
        ]
    },
    {
        name: "Thanatos",
        src: require('../img/thanatos.png'),
        skills: "C#, Unity3D",
        date: "Sept 2023 – Jan 2023",
        link: {
            label: "Play on Steam",
            url: "https://store.steampowered.com/app/2748840/THANATOS/?beta=1"
        },
        description: [
            "Developed end-to-end gameplay, mechanics, and object animations for an original first-person, 3D psychological horror puzzle mystery game with 3 levels, a beginning narrative, and an ending cinematic",
            "Collaborated with a designer to create graphics, animations, levels & narrative and a team of audio composers to produce music & SFX"
        ]
    },
    {
        name: "GymCat",
        src: require('../img/gymcat.png'),
        skills: "Swift, SwiftUI, WidgetKit, MuscleWiki API",
        date: "May 2023",
        description: [
            "Designed and developed a beginner-friendly gym iOS app used to create and store personal workout splits",
            "Incorporate MuscleWiki API to show demonstrations of various exercises"
        ]
    },
    {
        label: "TCAB",
        name: "Trojan Check Automation Bot",
        src: require('../img/trojancheck.png'),
        skills: "Python, Selenium, TwilioAPI, PythonAnywhere",
        date: "Nov 2021",
        link: {
            label: "Code",
            url: "https://github.com/anginguyen/TrojanCheckAutomation"
        },
        description: [
            "Developed a web-scraping automation bot to log into USC account every night, complete the COVID-19 survey, screenshot the QR code provided, and send the screenshot to corresponding phone number"
        ]
    }
]

function Projects() {
    return (
        <WindowBox name="Projects" width={0.60} classes="projects" content={
            <div className="window-content project-tabs-content">
                <Tabs>
                    <TabList>
                        {projects.map((project) => 
                            <Tab>{project.label ? project.label : project.name}</Tab>
                        )}
                    </TabList>
                    
                    <div className="tab-panels">
                        {projects.map((project) =>
                            <TabPanel>
                                <ProjectTab project={project} />
                            </TabPanel>
                        )}
                    </div>
                </Tabs>

                <div className="nav-buttons">
                    <NavButton type="back" />
                    {/* <NavButton type="next" to='/skills' /> */}
                </div>
            </div>
        }/>
    )
}

export default Projects;