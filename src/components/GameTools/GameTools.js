import React, { useState } from 'react';
import ExposureNeg1Icon from '@material-ui/icons/ExposureNeg1';
import EmojiObjectsIcon from '@material-ui/icons/EmojiObjects';
import './GameTools.css';

const GameTools = ({ onUseTool }) => {
    const [neg1Icon ,setNeg1Icon] = useState(true)
    const [lampIcon , setLampIcon ] = useState(true);
    
    const onClickTool = tool =>{
        if (tool==='neg1') setNeg1Icon(false)
        if (tool ==='lamp') setLampIcon(false)
        onUseTool(tool)
    }
    if (!neg1Icon && !lampIcon) return null;
    return (<div className="toolsContainer">
            {neg1Icon &&  <div className="tool" onClick={()=>onClickTool('neg1')}>
                                <ExposureNeg1Icon htmlColor="#2b2b2b" fontSize="large" />
                                <strong className="t_subtitle">צמצם אפשרות</strong>
                          </div>
            }
             {lampIcon && <div className="tool" onClick={()=>onClickTool('lamp')}>
                                <EmojiObjectsIcon htmlColor="#2b2b2b" fontSize="large" />
                                <strong className="t_subtitle">רמז</strong>
                          </div>
             }   
        </div>)
}
export default GameTools