import React from 'react';

const VolumeSlider = (props) => {
    return(
      <div>
        <input type='range' min='0'  max='100' onClick={props.changeVol}></input>
        {props.parVolume}
      </div>    
    )
}

export default VolumeSlider;