import React from 'react';
import Pad from './components/pad/Pad';
import VolumeSlider from './components/volumeSlider/VolumeSlider';
import PowerOnOff from './components/powerOnOff/PowerOnOff';
import Display from './components/display/Display';
import PlaylistSelector from './components/playlistSelector/PlaylistSelector';
import LogoHeader from './components/logoHeader/LogoHeader';
import './App.css';
import './components/volumeSlider/volumeSlider.css';
import './components/display/display.css';
import './components/pad/pad.css';
import './components/powerOnOff/powerOnOff.css';
import './components/playlistSelector/playlistSelector.css';
import './components/logoHeader/logoHeader.css';
import { connect } from 'react-redux';
import { playlistOne, playlistTwo } from './audios';



class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      playList: 'CLASSIC',
      keyPressed: '',
      lastVolume: 0
    };
    this.aud = [];
    this.keyValidator = ['Q', 'W', 'E', 'A', 'S', 'D', 'Z', 'X', 'C'];
  }

  componentWillMount() {
    document.addEventListener("keydown", this.makeSoundKeyDown.bind(this));
  }

  makeSoundClick = (index, e) => {
    if (!this.props.onoff) return;
    var aud = e.currentTarget.querySelector('audio');
    aud.currentTime = 0;
    aud.volume = this.props.volumeStore / 100;
    aud.play();
    this.setState({ keyPressed: e.currentTarget.value });
  }

  makeSoundKeyDown = (e) => {
    if (!this.props.onoff || this.keyValidator.indexOf(e.key.toUpperCase()) === -1) return;
    var aud = document.querySelector(`.clip[id=${e.key.toUpperCase()}]`);
    aud.currentTime = 0;
    aud.volume = this.props.volumeStore / 100;
    aud.play();
    this.setState({ keyPressed: e.key.toUpperCase() });
  }

  render() {
    return (
      <div className="App">
        <div className="drumMachine">
          <div className='divHeaderControls'>
            <div className='divHeader'>
              <PowerOnOff></PowerOnOff>
              <LogoHeader></LogoHeader>
            </div>
            <div className="Controls">
              <div className='divPlaySelectors'>
                <PlaylistSelector playList='CLASSIC' ></PlaylistSelector>
                <PlaylistSelector playList='ELECTRO'></PlaylistSelector>
              </div>
              <Display playlist={this.state.playList} keyPressed={this.state.keyPressed} parVolume={this.state.volume}></Display>
              <VolumeSlider vol={this.state.volume} parVolume={this.state.volume}></VolumeSlider>
            </div>
          </div>
          <div className="Grid">
            {
              this.props.playListProp === 'CLASSIC' ?
                playlistOne.map((val, index) =>
                  <Pad code={val.code} parLetter={val.key} parVolume={this.state.volume} parSound={val.url} sendKey={this.makeSoundClick.bind(this, index)} key={index} keyActive={this.state.keyPressed}></Pad>
                ) :
                playlistTwo.map((val, index) =>
                  <Pad code={val.code} parLetter={val.key} parVolume={this.state.volume} parSound={val.url} sendKey={this.makeSoundClick.bind(this, index)} key={index} keyActive={this.state.keyPressed}></Pad>
                )
            }
          </div>
        </div>
      </div>
    );
  }
}



const mapStateToProps = (state) => {
  return {
    onoff: state.onoff,
    volumeStore: state.volume,
    playListProp: state.playList
  }
}


export default connect(mapStateToProps)(App);