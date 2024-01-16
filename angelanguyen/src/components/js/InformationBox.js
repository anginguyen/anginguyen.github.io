import '../css/InformationBox.css';

function InformationBox(props) {
    const classes = "information-box " + props.class;

    return (
        <fieldset className={classes}>
            <legend>{props.title}</legend>
            <div className="information-box-content">
                <p>{props.content}</p>
            </div>
        </fieldset>
    )
}

export default InformationBox;