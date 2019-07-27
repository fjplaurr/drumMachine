import React from 'react';
import './App.css';
import {AwesomeButton} from "react-awesome-button";
import 'react-awesome-button/dist/themes/theme-c137.css';



class Pad extends React.Component{
  constructor(props){
    super(props);
    this.makeSound = this.makeSound.bind(this);
    this.audio = React.createRef();
  }

  makeSound(e){
    if(this.props.paramOnOff === 'ON') {
      this.props.sendKey(this.props.paramLetter);
      this.audio.current.currentTime = 0;
      this.audio.current.play();
    }
  }

  handleKeyDown(e){
    if(e.key.toUpperCase() === this.props.paramLetter){
      this.props.sendKey(this.props.paramLetter);
      this.audio.current.currentTime = 0;
      this.audio.current.play();
    }    
  }

  componentWillMount(){
    document.addEventListener("keydown",this.handleKeyDown.bind(this));
  }

  render() {
    console.log("Rendering child");
    return(
      <div onClick={this.makeSound}  className='drum-pad'>
        <audio src={this.props.paramSound} className="aud" ref={this.audio}></audio> 
        <button>{this.props.paramLetter}</button>
        {/*<AwesomeButton type="primary" >{this.props.paramLetter}</AwesomeButton>*/}
      </div>
    );
  }
}



class App extends React.Component{
  constructor(props){
    console.log("Constructing parent");
    super(props);
    this.state = {
      playList: 'BANK 1',
      onOff: 'ON',
      keyPressed: 'Q'
    };
    this.allSounds = '';
    this.importAll = this.importAll.bind(this);    
    this.changeOnOff = this.changeOnOff.bind(this);
    this.changePlayList = this.changePlayList.bind(this);
    this.changeKey = this.changeKey.bind(this);
  }

  changeKey(keyRecieved){
    this.setState({keyPressed:keyRecieved});
  }

  importAll (r) {
    let sounds = {};
    r.keys().map((item, index) => { sounds[item.replace('./', '')] = r(item); });
    return sounds;
  } 
  
  changeOnOff(){
    this.setState((state) => ({
      onOff: state.onOff === 'ON'? 'OFF':'ON'
    }));
  }

  changePlayList(){
    this.setState((state) => ({
      playList: state.playList === 'BANK 1'? 'BANK 2':'BANK 1'
    }));
  }

  componentWillMount(){
    console.log('Component will mount');
    this.allSounds = this.importAll(require.context('./sounds', true, /\.(mp3)$/));  //second parameter: -true- to search in subfolders
  }
  
  render() {
    console.log('Rendering parent');
    var prueb = playlistOne.filter(x => x.key == this.state.keyPressed)[0];
    console.log(typeof(prueb));
    console.log(prueb);
    console.log(prueb.url);
    return(
      <div className="App">      
        <div className="drumMachine">
          <div className="Grid" id="drum-machine">
              <Pad paramLetter='Q' paramOnOff={this.state.onOff} paramSound={this.state.playList === 'BANK 1'? playlistOne[0].url: playlistTwo[0].url} sendKey={this.changeKey}></Pad>
              <Pad paramLetter='W' paramOnOff={this.state.onOff} paramSound={this.state.playList === 'BANK 1'? playlistOne[1].url: playlistTwo[1].url} sendKey={this.changeKey}></Pad>
              <Pad paramLetter='E' paramOnOff={this.state.onOff} paramSound={this.state.playList === 'BANK 1'? playlistOne[2].url: playlistTwo[2].url} sendKey={this.changeKey}></Pad>
              <Pad paramLetter='A' paramOnOff={this.state.onOff} paramSound={this.state.playList === 'BANK 1'? playlistOne[3].url: playlistTwo[3].url} sendKey={this.changeKey}></Pad>
              <Pad paramLetter='S' paramOnOff={this.state.onOff} paramSound={this.state.playList === 'BANK 1'? playlistOne[4].url: playlistTwo[4].url} sendKey={this.changeKey}></Pad>
              <Pad paramLetter='D' paramOnOff={this.state.onOff} paramSound={this.state.playList === 'BANK 1'? playlistOne[5].url: playlistTwo[5].url} sendKey={this.changeKey}></Pad>
              <Pad paramLetter='Z' paramOnOff={this.state.onOff} paramSound={this.state.playList === 'BANK 1'? playlistOne[6].url: playlistTwo[6].url} sendKey={this.changeKey}></Pad>
              <Pad paramLetter='X' paramOnOff={this.state.onOff} paramSound={this.state.playList === 'BANK 1'? playlistOne[7].url: playlistTwo[7].url} sendKey={this.changeKey}></Pad>
              <Pad paramLetter='C' paramOnOff={this.state.onOff} paramSound={this.state.playList === 'BANK 1'? playlistOne[8].url: playlistTwo[8].url} sendKey={this.changeKey}></Pad>
          </div>
          <div>
            <div onClick={this.changeOnOff}>
              {/*<AwesomeButton type="primary" className='onOffButton'>{this.state.onOff}</AwesomeButton>*/}
              <button>{this.state.onOff}</button>
            </div>
            <div onClick={this.changePlayList}>
              <button>{this.state.playList}</button>
              {/*<AwesomeButton type="primary" className='playlistButton'>{this.state.playList}</AwesomeButton>*/}
            </div>
            <button>
              {this.state.playList === 'BANK 1'? playlistOne.filter(x => x.key == this.state.keyPressed)[0].id : playlistTwo.filter(x => x.key == this.state.keyPressed)[0].id}
            </button>
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