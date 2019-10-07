import React from 'react';
import { connect } from 'react-redux';
import changeVolume from '../../redux/actions/changeVolume';
import changePlayList from '../../redux/actions/changePlayList';


class VolumeSlider extends React.Component {
  constructor(props) {
    super(props);
    this.changVol = this.changVol.bind(this);
    this.muteVolume = this.muteVolume.bind(this);
  }

  changVol(event) {
    this.props.changeVolume(event.target.value);
  }

  muteVolume = () => {
    this.props.changeVolume(0);
  }

  render() {
    const { onOffStore, volStore } = this.props;
    return (
      <div className="divVolumeSlider" >
        <div className='inputSliderWrapper'>
          <input className={onOffStore ? 'sliderOn' : 'sliderOff'} type="range" min='0' max='100' value={volStore} onChange={this.changVol}></input>
        </div>
        <div className='iconWrapper'>
          <i onClick={this.muteVolume} className={volStore === 0 && onOffStore ? 'iconVolumeOn fas fa-volume-mute' : volStore !== 0 && onOffStore ?
            'iconVolumeOff fas fa-volume-up' : volStore !== 0 && onOffStore ? 'iconVolumeOn fas fa-volume-up' : 'iconVolumeOff fas fa-volume-mute'} />
        </div>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    onOffStore: state.onoff,
    volStore: state.volume
  }
}

const mapDispatchToProps = {
  changeVolume,
  changePlayList
}

export default connect(mapStateToProps, mapDispatchToProps)(VolumeSlider);