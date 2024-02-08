import InformationBox from "./InformationBox";
import '../css/ProjectTab.css';

function ProjectTab({ project }) {
    const alt = project.name + " image";

    return (
        <>
            <div className="project-top">
                <div className="project-title">
                    <img src={project.src} alt={alt} />
                    <p>{project.name}</p>
                </div>
                
                <div className="project-information">
                    <InformationBox title="Skills" content={project.skills} classes="project-skills" />
                    <InformationBox title="Date" content={project.date} classes="project-date" />

                    {project.link &&
                        <a href={project.link.url} className="button-shadow project-button" target="_blank" rel="noreferrer">{project.link.label}</a>
                    }
                </div>
            </div>

            <fieldset className="information-box project-description">
                <legend>Description</legend>
                <div className="information-box-content">
                    <ul>
                        {(project.description).map((desc) => 
                            <li>{desc}</li>
                        )}
                    </ul>
                </div>
            </fieldset>
        </>
    )
}

export default ProjectTab;