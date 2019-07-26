import React from 'react';
import './App.css';
import {AwesomeButton} from "react-awesome-button";
import 'react-awesome-button/dist/themes/theme-c137.css';



class Pad extends React.Component{
  constructor(props){
    super(props);
    this.makeSound = this.makeSound.bind(this);
  }

  makeSound(e){
    console.log("Button pressed");
    console.log(this.props);
    if(this.props.paramOnOff === 'ON') e.currentTarget.getElementsByClassName("aud")[0].play();
  }

  render() {
    return(
      <div onClick={this.makeSound} className='drum-pad'>
        <audio src={this.props.paramSound} className="aud"></audio> 
        <AwesomeButton type="primary" >{this.props.paramLetter}</AwesomeButton>
      </div>
    );
  }
}


class App extends React.Component{
  
  constructor(props){
    super(props);
    this.state = {
      sound : '',
      number: '',
      playList: 'MODERN',
      onOff: 'ON'
    };
    this.allSounds = '';
    this.importAll = this.importAll.bind(this);    
    this.changeOnOff = this.changeOnOff.bind(this);
    this.changePlayList = this.changePlayList.bind(this);
    console.log('Constructor');
    console.log(this.state);
  }

  importAll (r) {
    let sounds = {};
    r.keys().map((item, index) => { sounds[item.replace('./', '')] = r(item); });
    return sounds;
  } 
  
  changeOnOff(){
    console.log("Changing onOFF from " + this.state.onOFF);
    this.setState((state) => ({
      onOff: state.onOff === 'ON'? 'OFF':'ON'
    }));
    console.log('Changed to '+this.state.onOff);
  }

  changePlayList(){
    console.log("Changing Playlist");
    this.setState((state) => ({
      playList: state.playList === 'MODERN'? 'CLASSIC':'MODERN'
    }));
    console.log(this.state);
  }

  handleKeyDown(ev){
    console.log("tecla pulsada");
    console.log(ev.key);

  }

  componentWillMount(){
    this.allSounds = this.importAll(require.context('./sounds', true, /\.(mp3)$/));  //second parameter: -true- to search in subfolders
    console.log(this.allSounds);
    console.log('Component will mount');
    console.log(this.state);
    document.addEventListener('keydown',this.handleKeyDown);

  }

  componentWillUnmount(){
    document.removeEventListener('keydown',this.handleKeyDown);
  }

  render() {
    console.log('Render');
    console.log(this.state);
    console.log(this.allSounds);
    return(
      <div className="App">      
        <div className="drumMachine">

          <div className="Grid" id="drum-machine">
              <Pad paramLetter='Q' paramOnOff={this.state.onOff} paramSound={this.state.playList === 'MODERN'? Object.values(this.allSounds)[0]: Object.values(this.allSounds)[9]}></Pad>
              <Pad paramLetter='W' paramOnOff={this.state.onOff} paramSound={this.state.playList === 'MODERN'? Object.values(this.allSounds)[1]: Object.values(this.allSounds)[10]}></Pad>
              <Pad paramLetter='E' paramOnOff={this.state.onOff} paramSound={this.state.playList === 'MODERN'? Object.values(this.allSounds)[2]: Object.values(this.allSounds)[11]}></Pad>
              <Pad paramLetter='A' paramOnOff={this.state.onOff} paramSound={this.state.playList === 'MODERN'? Object.values(this.allSounds)[3]: Object.values(this.allSounds)[12]}></Pad>
              <Pad paramLetter='S' paramOnOff={this.state.onOff} paramSound={this.state.playList === 'MODERN'? Object.values(this.allSounds)[4]: Object.values(this.allSounds)[13]}></Pad>
              <Pad paramLetter='D' paramOnOff={this.state.onOff} paramSound={this.state.playList === 'MODERN'? Object.values(this.allSounds)[5]: Object.values(this.allSounds)[14]}></Pad>
              <Pad paramLetter='Z' paramOnOff={this.state.onOff} paramSound={this.state.playList === 'MODERN'? Object.values(this.allSounds)[6]: Object.values(this.allSounds)[15]}></Pad>
              <Pad paramLetter='X' paramOnOff={this.state.onOff} paramSound={this.state.playList === 'MODERN'? Object.values(this.allSounds)[7]: Object.values(this.allSounds)[16]}></Pad>
              <Pad paramLetter='C' paramOnOff={this.state.onOff} paramSound={this.state.playList === 'MODERN'? Object.values(this.allSounds)[8]: Object.values(this.allSounds)[17]}></Pad>
          </div>
          <div>
            <div onClick={this.changeOnOff}>
                <AwesomeButton type="primary" className='onOffButton'>{this.state.onOff}</AwesomeButton>
            </div>
            <div onClick={this.changePlayList}>
                <AwesomeButton type="primary" className='playlistButton'>{this.state.playList}</AwesomeButton>
            </div>
          </div>

        </div>
      </div>
    );
  }
}



export default App;