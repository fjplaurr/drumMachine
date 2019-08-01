import React from 'react';

const VolumeSlider = (props) => {
  console.log("Rendering VolumeSlider");
    return(
      <div>
        <input type='range' min='0'  max='100' onClick={props.changeVol} className="flotof"></input>
        {props.parVolume}
      </div>    
    )
}

export default VolumeSlider;