import '../css/WindowHeader.css';
import x_icon from '../../img/x-icon.png';
import maximize_icon from '../../img/maximize-icon.png';
import hide_icon from '../../img/hide-icon.png';

function WindowHeader({ header }) {
    return (
        <div className='windowbox-header'>
            <p className='header-text'>{header}</p>

            <div className='header-buttons'>
                <button className='header-button button-shadow'><img src={hide_icon} alt="Hide icon" /></button>
                <button className='header-button button-shadow'><img src={maximize_icon} alt="Maximize icon" /></button>
                <button className='header-button button-shadow'><img src={x_icon} alt="X icon" /></button>
            </div>
        </div>
    )
}

export default WindowHeader;