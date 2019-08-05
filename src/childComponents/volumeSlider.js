import React from 'react';

const VolumeSlider = (props) => {
  console.log("Rendering VolumeSlider");
    return(
      <div className="divVolumeSlider">
        <input type="range" min='0' max='100' onChange={props.changeVol}></input>
        <i className="fas fa-volume-up"/>
      </div>
    )
}

export default VolumeSlider;