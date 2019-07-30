import React from 'react';


const OnOff = (props) => {
    return(
        <button onClick={props.parChangeOnOff}>{props.parOnOff}</button>
    )
}

export default OnOff;