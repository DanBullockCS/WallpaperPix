import React from "react";
import Draggable from 'react-draggable';

import desktopIcon from './images/DesktopIcons/Discord.png';

export default class DesktopIconsOverlay extends React.Component {
    render() {
        return (
            <div className={"test"} >
                <Draggable
                    axis="both"
                    handle=".handle"
                    defaultPosition={{x: 0, y: 0}}
                    position={null}
                    grid={[25, 25]}
                    scale={1}
                    onStart={this.handleStart}
                    onDrag={this.handleDrag}
                    onStop={this.handleStop}>
                    <div>
                    <div className="handle"><img src={desktopIcon}></img></div>
                    </div>
                </Draggable>
            </div>
        )
    }
}
