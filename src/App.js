import React from 'react';
import Pad from './childComponents/Pad';
import VolumeSlider from './childComponents/volumeSlider';
import OnOff from './childComponents/onOff';
import DrumVisualizer from './childComponents/drumVisualizer';
import PlayListSelector from './childComponents/playlistSelector';
import LogoHeader from './childComponents/LogoHeader';
import './App.css';
import './childComponents/volumeSlider.css';


class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      playList: 'BANK 1',
      onOff: false,
      keyPressed: '',
      volume: 50
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
    this.setState({ volume: event.target.value });
  }

  handleChange = newValue => {
    this.setState({
      volume: newValue
    });
  };

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

  render() {console.log('ñpwefe');
  
    console.log(this.state.playList);
    
    return (
      <div className="App">
        <div className="drumMachine">
          <div className='divHeaderControls'>
            <div className='divHeader'>
              <OnOff parOnOff={this.state.onOff} parChangeOnOff={this.changeOnOff}>{this.state.onOff}</OnOff>
              <LogoHeader></LogoHeader>
            </div>
            <div className="Controls">
              <div className='divPlaySelectors'>
               <PlayListSelector parOnOff={this.state.onOff} playList='BANK 1' changePlaylist={this.changePlayList} playListActive={this.state.playList}></PlayListSelector>
               <PlayListSelector parOnOff={this.state.onOff} playList='BANK 2' changePlaylist={this.changePlayList} playListActive={this.state.playList}></PlayListSelector>
              </div>
              <VolumeSlider parVolume={this.state.volume} changeVol={this.volumeHandler}></VolumeSlider>
              <DrumVisualizer playlist={this.state.playList} keyPressed={this.state.keyPressed} firstPlayList={this.firstPlayList} secondPlayList={this.secondPlayList} parVolume={this.state.volume} parOnOff={this.state.onOff}></DrumVisualizer>
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
    id: 'Heater-1',
    url: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-1.mp3'
  }, {
    key: 'W',
    id: 'Heater-2',
    url: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-2.mp3'
  }, {
    key: 'E',
    id: 'Heater-3',
    url: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-3.mp3'
  }, {
    key: 'A',
    id: 'Heater-4',
    url: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-4_1.mp3'
  }, {
    key: 'S',
    id: 'Clap',
    url: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-6.mp3'
  }, {
    key: 'D',
    id: 'HH-Open',
    url: 'https://s3.amazonaws.com/freecodecamp/drums/Dsc_Oh.mp3'
  }, {
    key: 'Z',
    id: "Kick-n'-Hat",
    url: 'https://s3.amazonaws.com/freecodecamp/drums/Kick_n_Hat.mp3'
  }, {
    key: 'X',
    id: 'Kick',
    url: 'https://s3.amazonaws.com/freecodecamp/drums/RP4_KICK_1.mp3'
  }, {
    key: 'C',
    id: 'HH-Closed',
    url: 'https://s3.amazonaws.com/freecodecamp/drums/Cev_H2.mp3'
  }
];


const playlistTwo = [
  {
    key: 'Q',
    id: 'Chord-1',
    url: 'https://s3.amazonaws.com/freecodecamp/drums/Chord_1.mp3'
  }, {
    key: 'W',
    id: 'Chord-2',
    url: 'https://s3.amazonaws.com/freecodecamp/drums/Chord_2.mp3'
  }, {
    key: 'E',
    id: 'Chord-3',
    url: 'https://s3.amazonaws.com/freecodecamp/drums/Chord_3.mp3'
  }, {
    key: 'A',
    id: 'Shaker',
    url: 'https://s3.amazonaws.com/freecodecamp/drums/Give_us_a_light.mp3'
  }, {
    key: 'S',
    id: 'Open-HH',
    url: 'https://s3.amazonaws.com/freecodecamp/drums/Dry_Ohh.mp3'
  }, {
    key: 'D',
    id: 'Closed-HH',
    url: 'https://s3.amazonaws.com/freecodecamp/drums/Bld_H1.mp3'
  }, {
    key: 'Z',
    id: 'Punchy-Kick',
    url: 'https://s3.amazonaws.com/freecodecamp/drums/punchy_kick_1.mp3'
  }, {
    key: 'X',
    id: 'Side-Stick',
    url: 'https://s3.amazonaws.com/freecodecamp/drums/side_stick_1.mp3'
  }, {
    key: 'C',
    id: 'Snare',
    url: 'https://s3.amazonaws.com/freecodecamp/drums/Brk_Snr.mp3'
  }
];


export default App;