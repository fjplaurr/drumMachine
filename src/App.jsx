import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Pad from './components/Pad';
import VolumeSlider from './components/VolumeSlider';
import Display from './components/Display';
import PlaylistSelector from './components/PlaylistSelector';
import LogoHeader from './components/LogoHeader';
import PowerOnOff from './components/PowerOnOff';
import './App.css';
import './components/volumeSlider.css';
import './components/display.css';
import './components/pad.css';
import './components/powerOnOff.css';
import './components/playlistSelector.css';
import './components/logoHeader.css';
import { playlistOne, playlistTwo } from './audios';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      playList: 'CLASSIC',
      keyPressed: '',
    };
    this.aud = [];
    this.keyValidator = ['Q', 'W', 'E', 'A', 'S', 'D', 'Z', 'X', 'C'];
    document.addEventListener('keydown', this.makeSoundKeyDown.bind(this));
  }

  makeSoundClick(index, e) {
    const { onoff, volumeStore } = this.props;
    if (!onoff) return;
    const aud = e.currentTarget.querySelector('audio');
    aud.currentTime = 0;
    aud.volume = volumeStore / 100;
    aud.play();
    this.setState({ keyPressed: e.currentTarget.value });
  }

  makeSoundKeyDown(e) {
    const { onoff, volumeStore } = this.props;
    if (!onoff || this.keyValidator.indexOf(e.key.toUpperCase()) === -1) return;
    const aud = document.querySelector(`.clip[id=${e.key.toUpperCase()}]`);
    aud.currentTime = 0;
    aud.volume = volumeStore / 100;
    aud.play();
    this.setState({ keyPressed: e.key.toUpperCase() });
  }

  render() {
    const { playListProp } = this.props;
    const { playList, keyPressed, volume } = this.state;
    return (
      <div className="App">
        <div className="drumMachine">
          <div className="divHeaderControls">
            <div className="divHeader">
              <PowerOnOff />
              <LogoHeader />
            </div>
            <div className="Controls">
              <div className="divPlaySelectors">
                <PlaylistSelector
                  playList="CLASSIC"
                />
                <PlaylistSelector
                  playList="ELECTRO"
                />
              </div>
              <Display
                playlist={playList}
                keyPressed={keyPressed}
                parVolume={volume}
              />
              <VolumeSlider
                vol={volume}
                parVolume={volume}
              />
            </div>
          </div>
          <div className="Grid">
            {
              playListProp === 'CLASSIC'
                ? playlistOne.map((val, index) => (
                  <Pad
                    code={val.code}
                    parLetter={val.key}
                    parVolume={volume}
                    parSound={val.url}
                    sendKey={this.makeSoundClick.bind(this, index)}
                    key={val.key}
                    keyActive={keyPressed}
                  />
                ))
                : playlistTwo.map((val, index) => (
                  <Pad
                    code={val.code}
                    parLetter={val.key}
                    parVolume={volume}
                    parSound={val.url}
                    sendKey={this.makeSoundClick.bind(this, index)}
                    key={val.key}
                    keyActive={keyPressed}
                  />
                ))
            }
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  onoff: state.onoff,
  volumeStore: state.volume,
  playListProp: state.playList,
});

App.propTypes = {
  onoff: PropTypes.bool.isRequired,
  volumeStore: PropTypes.number.isRequired,
  playListProp: PropTypes.string.isRequired,
};

export default connect(mapStateToProps)(App);
