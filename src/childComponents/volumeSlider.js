import React from 'react';
import 'react-input-range/lib/css/index.css';

const VolumeSlider = (props) => {
  console.log("Rendering VolumeSlider");
    return(
      <input type="range" min='0' max='100' onChange={props.changeVol}></input>
    )
}

export default VolumeSlider;