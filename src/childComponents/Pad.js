import React from 'react';



const Pad = (props) =>{
  return(
    <div onClick={props.sendKey} className='drum-pad'>
      <audio src={props.parSound} className="aud" ref={props.audioRef} id={props.parLetter}></audio> 
      <button id='lmao' value={props.parLetter}>{props.parLetter}</button>
    </div>
  );
}


export default Pad;
