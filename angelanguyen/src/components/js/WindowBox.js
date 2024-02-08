import { useState, useEffect, useRef } from 'react';
import Draggable from 'react-draggable';
import WindowHeader from "./WindowHeader";
import useWindowDimensions from '../../hooks/useWindowDimensions';
import '../css/WindowBox.css';

function WindowBox({ name, content, width, classes }) {
    const container = useRef(null);
    const [containerHeight, setContainerHeight] = useState(null);
    const { windowHeight, windowWidth } = useWindowDimensions();

    const dragDisabled = windowWidth <= 1000;
    const defaultPos = dragDisabled ? {x: 0, y: 0} : {x: windowWidth*(0.5-width/2), y: 40};
    const dragBounds = {top: 0, left: 0, right: windowWidth*(1-width-0.007), bottom: windowHeight-containerHeight-48};

    const containerClasses = classes ? "window-container box-shadow " + classes : "window-container box-shadow";

    useEffect(() => 
        setContainerHeight(container.current.offsetHeight)
    , [setContainerHeight]);
    
    return (
        <Draggable 
            handle='.windowbox-header' 
            defaultPosition={defaultPos}
            bounds={dragBounds}
            disabled={dragDisabled}
        >
            <div className={containerClasses} ref={container}>
                <WindowHeader header={name} />

                {content}
            </div>
        </Draggable>
    )
}

export default WindowBox;