import InformationBox from "./InformationBox";
import '../css/ExperienceTab.css';

function ExperienceTab({ experience }) {
    return (
        <>
            <div className="experience-content">
                <div className="experience-title">
                    <img src={experience.icon} alt={experience.company + " icon"} />
                    <div className="experience-name">
                        <p style={{fontWeight: "800"}}>{experience.role}</p>
                        <p>{experience.company}</p>
                    </div>
                </div>

                <div className="experience-information">
                    <div className="experience-date-location">
                        <InformationBox classes="experience-location" title="Location" content={experience.location} />
                        <InformationBox classes="experience-date" title="Date" content={experience.date} />
                    </div>
                    <InformationBox title="Skills" classes="experience-skills" content={experience.skills} />
                </div>
            </div>

            <fieldset className="information-box experience-description">
                <legend>Description</legend>
                <div className="information-box-content">
                    <ul>
                        {(experience.description).map((desc) => 
                            <li>{desc}</li>
                        )}
                    </ul>
                </div>
            </fieldset>
        </>
    )
}

export default ExperienceTab;