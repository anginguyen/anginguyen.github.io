import InformationBox from "./InformationBox";
import '../css/ProjectTab.css';

function ProjectTab(props) {
    const alt = props.project.name + " image";

    return (
        <>
            <div className="project-top">
                <div className="project-information">
                    <InformationBox title="Skills" content={props.project.skills} class="project-skills" />
                    <InformationBox title="Date" content={props.project.date} class="project-date" />

                    {(props.project.link) &&
                        <a href={props.project.link.url} className="button-shadow project-button" target="_blank">{props.project.link.label}</a>
                    }
                </div>

                <div className="project-title">
                    <img src={props.project.src} alt={alt} />
                    <p>{props.project.name}</p>
                </div>
            </div>

            <fieldset className="information-box project-description">
                <legend>Description</legend>
                <div className="information-box-content">
                    <ul>
                        {(props.project.description).map((desc) => 
                            <li>{desc}</li>
                        )}
                    </ul>
                </div>
            </fieldset>
        </>
    )
}

export default ProjectTab;