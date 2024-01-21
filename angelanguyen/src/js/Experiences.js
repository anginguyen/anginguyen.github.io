import { TabList, TabPanel, Tabs, Tab } from "react-tabs";
import 'react-tabs/style/react-tabs.css';
import WindowBox from "../components/js/WindowBox";
import ExperienceTab from "../components/js/ExperienceTab";
import NavButton from "../components/js/NavButton";
import '../css/Experiences.css';

const experiences = [
    {
        key: "apple1",
        role: "Software Engineer Intern",
        company: "Apple",
        icon: require('../img/apple-icon.png'),
        location: "Seattle, WA",
        date: "May 2023 – Aug 2023",
        skills: "Swift, SwiftUI, AppIntents",
        description: [
            "Developed end-to-end Siri experience for Wallet app on iOS and integrated into existing Siri Payments & Wallet domains with Swift and AppIntents",
            "Designed interactive, user-driven UI to display user data and generate dialog consistent with corporate design standards using SwiftUI",
            "Facilitated cross-functional collaboration across teams and presented to various stakeholders with a live demo"
        ]
    },
    {
        key: "terathought",
        role: "iOS Engineer",
        company: "TeraThought",
        icon: require('../img/terathought-icon.png'),
        location: "Los Angeles, CA",
        date: "Feb 2022 – Oct 2022",
        skills: "Swift, SwiftUI",
        description: [
            "Developed dynamic components on the Shareful iOS app with SwiftUI that follow the app design prototype",
            "Integrated features from iOS and MVC Framework developers to add backend functionality",
            "Collaborated with designers and engineers to produce mobile interfaces that align with corporate standards"
        ]
    },
    {
        key: "apple2",
        role: "Software Engineer Intern",
        company: "Apple",
        icon: require('../img/apple-icon.png'),
        location: "Seattle, WA",
        date: "May 2022 – Aug 2022",
        skills: "React.js, Sass, HTML/CSS",
        description: [
            "Developed an internal help portal that filters resources based on the user’s responses to route them to the best resources depending on their needs",
            "Designed site according to Apple standards using corporate components from Sass & React for frontend and implemented as single-page application with React Router",
            "Collaborated with Point of Contacts to extend portal to various teams and incorporate their resources"
        ]
    },
    {
        key: "usc",
        role: "Undergraduate Teaching Assistant",
        company: "USC Viterbi School of Engineering",
        company_shortened: "USC",
        icon: require('../img/usc-icon.png'),
        location: "Los Angeles, CA",
        date: "Jan 2022 – May 2022",
        skills: "C++",
        description: [
            "CSCI 104: Object-Oriented Design & Data Structures, 300+ students",
            "Facilitated a lab section to re-enforce topics taught in class, such as probability, heaps, back-tracking, and AVL trees",
            "Held office hours to assist in debugging programming assignments and guide students through concepts"
        ]
    },
    {
        key: "amazon",
        role: "Software Development Engineer Intern",
        company: "Amazon",
        icon: require('../img/amazon-icon.png'),
        location: "Seattle, WA",
        date: "May 2021 – Aug 2021",
        skills: "Python, Pytest",
        description: [
            "Developed and designed automated E2E testing framework for development process and system tests with PyTest to compare performance metrics",
            "Integrated testing and RTSP frameworks through threading and socket programming",
            "Reduced time for testing by 31% and testing errors by 14%"
        ]
    }
]

function Experiences() {
    return (
        <WindowBox name="Experiences" width={0.50} classes="experiences" content={
            <div className="window-content experience-tabs-content">
                <Tabs>
                    <TabList>
                        {experiences.map((experience) =>
                            experience.company_shortened ? <Tab>{experience.company_shortened}</Tab> : <Tab>{experience.company}</Tab>
                        )}
                    </TabList>
                    
                    <div className="tab-panels">
                        {experiences.map((experience) =>
                            <TabPanel>
                                <ExperienceTab experience={experience} />
                            </TabPanel>
                        )}
                    </div>
                </Tabs>

                <div className="nav-buttons">
                    <NavButton type="back" />
                    <NavButton type="next" to='/projects' />
                </div>
            </div>
        }/>
    )
}

export default Experiences;