import React from 'react';
import './App.css';
import 'react-awesome-button/dist/themes/theme-c137.css';
import Pad from './childComponents/Pad';
import VolumeSlider from './childComponents/volumeSlider';
import OnOff from './childComponents/onOff';



class App extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      playList: 'BANK 1',
      onOff: 'ON',
      keyPressed: 'Q',
      volume: 50
    };
    this.aud = [];
    this.keyValidator = ['Q','W','E','A','S','D','Z','X','C'];
  }

  componentWillMount(){
    document.addEventListener("keydown",this.makeSoundKeyDown.bind(this));
  }

  volumeHandler = (event) => {
    this.setState({volume:event.target.value});
  }

  makeSound = (e) => {    
    var aud = e.type === 'keydown'?  this.aud.filter(item => e.key.toUpperCase()===item.id)[0]: e.currentTarget.firstChild;
    aud.currentTime = 0;
    aud.volume = this.state.volume/100;
    aud.play();
  }

  makeSoundClick = (e) => {
    if(this.state.onOff === 'OFF') return;
    this.setState({keyPressed: e.currentTarget.lastChild.value});
    this.makeSound(e);
  }

  makeSoundKeyDown = (e) => {
    if(this.state.onOff === 'OFF' || this.keyValidator.indexOf(e.key.toUpperCase()) === -1) return;
    this.setState({keyPressed: e.key.toUpperCase()});
    this.makeSound(e);
  }
  
  changeOnOff = () => {
    this.setState((state) => ({
      onOff: state.onOff === 'ON'? 'OFF':'ON'
    }));
  }

  changePlayList = () => {
    this.setState((state) => ({
      playList: state.playList === 'BANK 1'? 'BANK 2':'BANK 1'
    }));
  }  
  

  render() {
    return(
      <div className="App">      
        <div className="drumMachine">
          <div className="Controls">
          <VolumeSlider parVolume={this.state.volume} changeVol={this.volumeHandler}></VolumeSlider>
            <OnOff parOnOff={this.state.onOff} parChangeOnOff={this.changeOnOff}>{this.state.onOff}</OnOff>
            <div onClick={this.changePlayList}>
              <button>{this.state.playList}</button>
            </div>
            <button>
              {this.state.playList === 'BANK 1'? playlistOne.filter(x => x.key === this.state.keyPressed)[0].id : playlistTwo.filter(x => x.key === this.state.keyPressed)[0].id}
            </button>
          </div>
          <div className="Grid" id="drum-machine">
            {
              this.state.playList === 'BANK 1'? 
                playlistOne.map((val,index) => {
                  return <Pad parLetter={val.key} parOnOff={this.state.onOff} parVolume={this.state.volume} parSound={val.url} sendKey={this.makeSoundClick} audioRef={(audioFromChild)=>this.aud[index]=audioFromChild}></Pad>
                }
                ): playlistTwo.map((val,index) => {
                return <Pad parLetter={val.key} parOnOff={this.state.onOff} parVolume={this.state.volume} parSound={val.url} sendKey={this.makeSoundClick} audioRef={(audioFromChild)=>this.aud[index]=audioFromChild}></Pad>
              })
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