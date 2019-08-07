import React from 'react';


const PowerOnOff = (props) => <button className={`powerButton ${props.parOnOff? 'powerOn':'powerOff'}`} onClick={props.parChangeOnOff}><i className="fas fa-power-off"/></button>


export default PowerOnOff;