import React from 'react';
import Pad from './components/pad/Pad';
import VolumeSlider from './components/volumeSlider/VolumeSlider';
import PowerOnOff from './components/powerOnOff/PowerOnOff';
import Display from './components/display/Display';
import PlayListSelector from './components/playlistSelector/PlaylistSelector';
import LogoHeader from './components/logoHeader/LogoHeader';
import './App.css';
import './components/volumeSlider/volumeSlider.css';
import './components/display/display.css';
import './components/pad/pad.css';
import './components/powerOnOff/powerOnOff.css';
import './components/playlistSelector/playlistSelector.css';
import './components/logoHeader/logoHeader.css';


class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      playList: 'BANK 1',
      onOff: true,
      keyPressed: '',
      volume: 50,
      muted: false,
      lastVolume: 0
    };
    this.aud = [];
    this.keyValidator = ['Q', 'W', 'E', 'A', 'S', 'D', 'Z', 'X', 'C'];
    this.firstPlayList = playlistOne;
    this.secondPlayList = playlistTwo;
  }

  componentWillMount() {
    document.addEventListener("keydown", this.makeSoundKeyDown.bind(this));
  }

  volumeHandler = (event) => {
    this.setState({ volume: event.target.value, muted:false });
  }

  makeSoundClick = (index, e) => {
    if (!this.state.onOff) return;
    var aud = e.currentTarget.querySelector('audio');
    aud.currentTime = 0;
    aud.volume = this.state.volume / 100;
    aud.play();
    this.setState({ keyPressed: e.currentTarget.value });
  }

  makeSoundKeyDown = (e) => {
    if (!this.state.onOff || this.keyValidator.indexOf(e.key.toUpperCase()) === -1) return;
    var aud = document.querySelector(`.aud[id=${e.key.toUpperCase()}]`);
    aud.currentTime = 0;
    aud.volume = this.state.volume / 100;
    aud.play();
    this.setState({ keyPressed: e.key.toUpperCase() });
  }

  changeOnOff = () => {
    this.setState((state) => ({
      onOff: !state.onOff,
      keyPressed: ''
    }));
  }

  changePlayList = (event) => {
    const playL = event.currentTarget.innerHTML;
    this.setState(() => ({
      playList: playL
    }));
  }

  muteVolume = () => {
    this.setState((state) =>
      state.muted === false? {volume: 0, muted:true, lastVolume: state.volume} : {volume: state.lastVolume, muted:false}
      );
  }

  render() {
    return (
      <div className="App">
        <div className="drumMachine">
          <div className='divHeaderControls'>
            <div className='divHeader'>
              <PowerOnOff parOnOff={this.state.onOff} parChangeOnOff={this.changeOnOff}>{this.state.onOff}</PowerOnOff>
              <LogoHeader></LogoHeader>
            </div>
            <div className="Controls">
              <div className='divPlaySelectors'>
               <PlayListSelector parOnOff={this.state.onOff} playList='BANK 1' changePlaylist={this.changePlayList} playListActive={this.state.playList}></PlayListSelector>
               <PlayListSelector parOnOff={this.state.onOff} playList='BANK 2' changePlaylist={this.changePlayList} playListActive={this.state.playList}></PlayListSelector>
              </div>
              <Display playlist={this.state.playList} keyPressed={this.state.keyPressed} firstPlayList={this.firstPlayList} secondPlayList={this.secondPlayList} parVolume={this.state.volume} parOnOff={this.state.onOff}></Display>
              <VolumeSlider parOnOff={this.state.onOff} propMuted={this.state.muted} vol={this.state.volume} muteVolume={this.muteVolume} parVolume={this.state.volume} changeVol={this.volumeHandler}></VolumeSlider>
            </div>
          </div>   
          <div className="Grid" id="drum-machine">
            {
              this.state.playList === 'BANK 1' ?
                playlistOne.map((val, index) =>
                  <Pad parLetter={val.key} parVolume={this.state.volume} parSound={val.url} sendKey={this.makeSoundClick.bind(this, index)} key={index} keyActive={this.state.keyPressed} parOnOff={this.state.onOff}></Pad>
                ) :
                playlistTwo.map((val, index) =>
                  <Pad parLetter={val.key} parVolume={this.state.volume} parSound={val.url} sendKey={this.makeSoundClick.bind(this, index)} key={index} keyActive={this.state.keyPressed} parOnOff={this.state.onOff}></Pad>
                )
            }        
          </div>
        </div>
      </div>
    );
  }
}


const playlistOne = [
  {
    key: 'Q',
    name: 'HEATER-1',
    url: 'https://res.cloudinary.com/fjplaurr/video/upload/v1565045242/Web%20Development/Audios/heater_qc3arc.mp3'
  }, {
    key: 'W',
    name: 'HEATER-2',
    url: 'https://res.cloudinary.com/fjplaurr/video/upload/v1565045242/Web%20Development/Audios/heater2_udzfqq.mp3'
  }, {
    key: 'E',
    name: 'MID-TOM',
    url: 'https://res.cloudinary.com/fjplaurr/video/upload/v1565045243/Web%20Development/Audios/tomMid_qru5mt.wav'
  }, {
    key: 'A',
    name: 'HI-TOM',
    url: 'https://res.cloudinary.com/fjplaurr/video/upload/v1565045243/Web%20Development/Audios/tomHi_snueho.wav'
  }, {
    key: 'S',
    name: 'TRUMPET',
    url: 'https://res.cloudinary.com/fjplaurr/video/upload/v1565070797/Web%20Development/Audios/trumpet_tjekk9.wav'
  }, {
    key: 'D',
    name: 'CHORD-1',
    url: 'https://res.cloudinary.com/fjplaurr/video/upload/v1565045243/Web%20Development/Audios/chord1_ihtmao.mp3'
  }, {
    key: 'Z',
    name: 'CHORD-2',
    url: 'https://res.cloudinary.com/fjplaurr/video/upload/v1565045243/Web%20Development/Audios/chord2_bhfutv.mp3'
  }, {
    key: 'X',
    name: 'SIDE-STICK',
    url: 'https://res.cloudinary.com/fjplaurr/video/upload/v1565045242/Web%20Development/Audios/sideStick_q3wdmw.mp3'
  }, {
    key: 'C',
    name: 'CLOSED-HH',
    url: 'https://res.cloudinary.com/fjplaurr/video/upload/v1565045242/Web%20Development/Audios/hhClosed_a5bscg.mp3'
  }
];


const playlistTwo = [
  {
    key: 'Q',
    name: 'PUNCHY KICK',
    url: 'https://res.cloudinary.com/fjplaurr/video/upload/v1565045242/Web%20Development/Audios/punchyKick_yfrq5v.mp3'
  }, {
    key: 'W',
    name: 'ROBOTIC-SOUND',
    url: 'https://res.cloudinary.com/fjplaurr/video/upload/v1565045243/Web%20Development/Audios/roboticSound_lle2sm.flac'
  }, {
    key: 'E',
    name: 'CLAVE',
    url: 'https://res.cloudinary.com/fjplaurr/video/upload/v1565070046/Web%20Development/Audios/clave_hl2zzo.wav'
  }, {
    key: 'A',
    name: 'ELECTRO-SNARE',
    url: 'https://res.cloudinary.com/fjplaurr/video/upload/v1565071218/Web%20Development/Audios/electroSnare_crqcdq.wav'
  }, {
    key: 'S',
    name: 'CONTROL-VOICE',
    url: 'https://res.cloudinary.com/fjplaurr/video/upload/v1565045243/Web%20Development/Audios/controlVoice_p5thwf.wav'
  }, {
    key: 'D',
    name: 'CLAP',
    url: 'https://res.cloudinary.com/fjplaurr/video/upload/v1565045243/Web%20Development/Audios/clap_a8ncjo.wav'
  }, {
    key: 'Z',
    name: 'ELECTRO-KICK',
    url: 'https://res.cloudinary.com/fjplaurr/video/upload/v1565070990/Web%20Development/Audios/electroKick_tzvpwk.wav'
  }, {
    key: 'X',
    name: 'RIDE',
    url: 'https://res.cloudinary.com/fjplaurr/video/upload/v1565045242/Web%20Development/Audios/ride_iurf1o.mp3'
  }, {
    key: 'C',
    name: 'SNARE',
    url: 'https://res.cloudinary.com/fjplaurr/video/upload/v1565045242/Web%20Development/Audios/snare_j1iaaa.mp3'
  }
];


export default App;