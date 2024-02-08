import { useState } from 'react';
import WindowBox from '../components/js/WindowBox';
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
    },
    { 
        name: "PHP",
        icon: require('../img/php-icon.png')
    },
    {
        name: "CSS",
        icon: require('../img/css-icon.png')
    },
    {
        name: "React",
        icon: require('../img/react-icon.png')
    },
    {
        name: "Unity",
        icon: require('../img/unity-icon.png')
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
        <WindowBox name="Skills" width={0.50} classes="skills" content={
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
        } />
    )
}

export default Skills;