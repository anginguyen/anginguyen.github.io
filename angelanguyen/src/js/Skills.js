import { useState } from 'react';
import WindowHeader from "../components/js/WindowHeader";
import DesktopIcon from "../components/js/DesktopIcon";
import NavButton from '../components/js/NavButton';
import "../css/Skills.css";

const skills = [
    {
        name: "C++",
        icon: require('../img/cpp-icon.png')
    },
    {
        name: "Python",
        icon: require('../img/python-icon.png')
    },
    {
        name: "C#",
        icon: require('../img/csharp-icon.png')
    },
    {
        name: "JavaScript",
        icon: require('../img/javascript-icon.png')
    }
]

const options = [
    { 
        label: "Programming Languages",
        value: "languages"
    },
    {
        label: "Technologies",
        value: "technologies"
    }
]

function Skills() {
    const [value, setValue] = useState("languages");
    const handleChange = (e) => {
        setValue(e.target.value);
    }

    return (
        <div className="window-container box-shadow skills">
            <WindowHeader header="Skills" />

            <div className="window-content skills-content">
                <select value={value} onChange={handleChange} className="skills-dropdown">
                    {options.map((option) =>
                        <option value={option.value}>{option.label}</option>
                    )}
                </select>

                <div className="skills-icons">
                    {skills.map((skill) => 
                        <DesktopIcon name={skill.name} icon={skill.icon} defaultClass="skill-icon" type='nolink' /> 
                    )}
                </div>


                <div className="nav-buttons">
                    <NavButton type="back" />
                </div>
            </div>
        </div>
    )
}

export default Skills;