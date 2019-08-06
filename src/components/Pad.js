import React from 'react';


const Pad = (props)=>{
  return(
    <button  onClick={props.sendKey} className={props.keyActive === props.parLetter && props.parOnOff? 'drum-pad drumOn drumActivated': !props.parOnOff? 'drum-pad drumOff': 'drum-pad drumOn'} value={props.parLetter}> {props.parLetter}
      <audio src={props.parSound} className="aud" id={props.parLetter}></audio> 
    </button>
  );
}


export default Pad;
