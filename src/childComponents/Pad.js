import React from 'react';



const Pad = (props) =>{
  console.log("Rendering Pad")
  return(
    <div  onClick={props.sendKey} className='drum-pad' tabIndex='0'>
      <audio src={props.parSound} className="aud"  id={props.parLetter}></audio> 
      <button id='lmao' value={props.parLetter}>{props.parLetter}</button>
    </div>
  );
}


export default Pad;
