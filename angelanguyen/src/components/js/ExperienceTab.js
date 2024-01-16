import InformationBox from "./InformationBox";
import '../css/ExperienceTab.css';

function ExperienceTab(props) {
    return (
        <>
            <div className="experience-content">
                <div className="experience-title">
                    <img src={props.experience.icon} alt={props.experience.company + " icon"} />
                    <p style={{fontWeight: "800"}}>{props.experience.role}</p>
                    <p>{props.experience.company}</p>
                </div>

                <div className="experience-information">
                    <div className="experience-date-location">
                        <InformationBox class="experience-location" title="Location" content={props.experience.location} />
                        <InformationBox class="experience-date" title="Date" content={props.experience.date} />
                    </div>
                    <InformationBox title="Skills" class="experience-skills" content={props.experience.skills} />
                </div>
            </div>

            <fieldset className="information-box experience-description">
                <legend>Description</legend>
                <div className="information-box-content">
                    <ul>
                        {(props.experience.description).map((desc) => 
                            <li>{desc}</li>
                        )}
                    </ul>
                </div>
            </fieldset>
        </>
    )
}

export default ExperienceTab;