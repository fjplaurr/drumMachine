import React from 'react';


const PowerOnOff = ({parOnOff,parChangeOnOff}) => <button className={`powerButton ${parOnOff? 'powerOn':'powerOff'}`} onClick={parChangeOnOff}><i className="fas fa-power-off"/></button>


export default PowerOnOff;