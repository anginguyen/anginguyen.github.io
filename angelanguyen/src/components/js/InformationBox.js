import '../css/InformationBox.css';

function InformationBox({ title, content, classes }) {
    classes = "information-box " + classes;

    return (
        <fieldset className={classes}>
            <legend>{title}</legend>
            <div className="information-box-content">
                <p>{content}</p>
            </div>
        </fieldset>
    )
}

export default InformationBox;