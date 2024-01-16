import { useNavigate } from "react-router-dom";
import '../css/NavButton.css';

function NavButton(props) {
    const navigate = useNavigate();

    switch (props.type) {
        case 'next':
            return (
                <button className="next-button button-shadow" onClick={(() => navigate(props.to))}>Next</button>
            )
        
        case 'back':
            return (
                <button className="back-button button-shadow" onClick={(() => navigate(-1))}>Back</button>
            )
        
        default:
            return (<></>)
    }
}

export default NavButton;