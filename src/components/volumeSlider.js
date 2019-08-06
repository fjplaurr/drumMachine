import React from 'react';

const VolumeSlider = (props) => {
  console.log("Rendering VolumeSlider");
    return(
      <div className="divVolumeSlider">
        <input className={props.parOnOff? 'sliderOn':'sliderOff'} type="range" min='0' max='100' value={props.vol} onChange={props.changeVol}></input>
        <i onClick={props.muteVolume} className={props.propMuted && props.parOnOff? 'iconVolumeOn fas fa-volume-mute': !props.propMuted && !props.parOnOff?
          'iconVolumeOff fas fa-volume-up': !props.propMuted && props.parOnOff? 'iconVolumeOn fas fa-volume-up': 'iconVolumeOff fas fa-volume-mute'}/>
      </div>
    )
}

export default VolumeSlider;