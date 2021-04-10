import { EmojiObjectsOutlined } from '@material-ui/icons';
import React from 'react';
import './Hint.css';

const Hint = props => {
    return (<div className="hint">
                 <bdi><strong>רמז :</strong> {props.children + " "} </bdi>
                 <EmojiObjectsOutlined htmlColor="whitesmoke" fontSize="small" />   
            </div>)
}
export default Hint;