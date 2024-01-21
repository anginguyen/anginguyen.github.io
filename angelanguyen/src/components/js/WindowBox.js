import { useState, useEffect, useRef } from 'react';
import Draggable from 'react-draggable';
import WindowHeader from "./WindowHeader";
import useWindowDimensions from '../../hooks/useWindowDimensions';
import '../css/WindowBox.css';

function WindowBox(props) {
    const container = useRef(null);
    const [containerHeight, setContainerHeight] = useState(null);
    const { height, width } = useWindowDimensions();

    const dragDisabled = width <= 1000;
    const defaultPos = dragDisabled ? {x: 0, y: 0} : {x: width*(0.5-props.width/2), y: 40};
    const dragBounds = {top: 0, left: 0, right: width*(1-props.width-0.007), bottom: height-containerHeight-48};

    const containerClasses = props.classes ? "window-container box-shadow " + props.classes : "window-container box-shadow";

    useEffect(() => 
        setContainerHeight(container.current.offsetHeight)
    );
    
    return (
        <Draggable 
            handle='.windowbox-header' 
            defaultPosition={defaultPos}
            bounds={dragBounds}
            disabled={dragDisabled}
        >
            <div className={containerClasses} ref={container}>
                <WindowHeader header={props.name} />

                {props.content}
            </div>
        </Draggable>
    )
}

export default WindowBox;