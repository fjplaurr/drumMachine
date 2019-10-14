import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import changeVolume from '../redux/actions/changeVolume';
import changePlayList from '../redux/actions/changePlayList';

class VolumeSlider extends React.Component {
  constructor(props) {
    super(props);
    this.changVol = this.changVol.bind(this);
    this.muteVolume = this.muteVolume.bind(this);
  }

  muteVolume() {
    this.props.changeVolume(0);
  }

  changVol(event) {
    this.props.changeVolume(event.target.value);
  }

  render() {
    const { onOffStore, volStore } = this.props;
    let classN;
    if (volStore === 0 && onOffStore) {
      classN = 'iconVolumeOn fas fa-volume-mute';
    } else if (volStore !== 0 && onOffStore) {
      classN = 'iconVolumeOff fas fa-volume-up';
    } else {
      classN = 'iconVolumeOff fas fa-volume-mute';
    }
    return (
      <div className="divVolumeSlider">
        <div className="inputSliderWrapper">
          <input
            className={onOffStore ? 'sliderOn' : 'sliderOff'}
            type="range"
            min="0"
            max="100"
            value={volStore}
            onChange={this.changVol}
          />
        </div>
        <div className="iconWrapper">
          <a
            tabIndex="0"
            type="button"
            onClick={this.muteVolume}
            onKeyDown={this.muteVolume}
            className={classN}
            aria-label="Mute volume"
          />
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

VolumeSlider.propTypes = {
  onOffStore: PropTypes.bool.isRequired,
  volStore: PropTypes.number.isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(VolumeSlider);
