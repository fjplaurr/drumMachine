import React from 'react';
import './App.css';
import {AwesomeButton} from "react-awesome-button";
import 'react-awesome-button/dist/themes/theme-c137.css';



class Pad extends React.Component{
  constructor(props){
    super(props);
    this.state={
      letter: props.paramLetter,
      song: props.paramSound
    };
    this.makeSound = this.makeSound.bind(this);
  }

  makeSound(e){
    console.log("Button pressed");
    console.log(e.currentTarget.attributes);
  }

  render() {
    return(
      <div onClick={this.makeSound} className='drum-pad'>
        <audio autoPlay src={this.state.song}></audio> 
        <AwesomeButton type="primary" >{this.state.letter}</AwesomeButton>
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
      playList: 'first',
      onOff: 'ON'
    };
    this.allSounds = '';
    this.importAll = this.importAll.bind(this);    
    this.changeOnOff = this.changeOnOff.bind(this);
    console.log('Constructing');
  }

  importAll (r) {
    let sounds = {};
    r.keys().map((item, index) => { sounds[item.replace('./', '')] = r(item); });
    return sounds;
  } 
  
  changeOnOff(){
    console.log("Changing onOFF");
    this.setState((state) => ({
      onOff: state.onOff === 'ON'? 'OFF':'ON'
    }));
    console.log('ESTADO ONOFF');
    console.log(this.state.onOff);
  }

  componentWillMount(){
    console.log('Component will mount');
    this.allSounds = this.importAll(require.context('./sounds', true, /\.(mp3)$/));  //second parameter: -true- to search in subfolders
    console.log(this.allSounds);
  }

  render() {
    console.log('Rendering');
    console.log(this.allSounds);
    return(
      <div className="App">      
        <div className="drumMachine">

          <div className="Grid" id="drum-machine">
              <Pad paramLetter='Q' paramSound={this.allSounds["firstList/Heater-1.mp3"]}></Pad>
              <Pad paramLetter='W'></Pad>
              <Pad paramLetter='E'></Pad>
              <Pad paramLetter='A'></Pad>
              <Pad paramLetter='S'></Pad>
              <Pad paramLetter='D'></Pad>
              <Pad paramLetter='Z'></Pad>
              <Pad paramLetter='X'></Pad>
              <Pad paramLetter='C'></Pad>
          </div>
          <div onClick={this.changeOnOff}>
              <AwesomeButton type="primary" className='onOffButton' >{this.state.onOff}</AwesomeButton>
          </div>
        </div>
      </div>
    );
  }
}



export default App;