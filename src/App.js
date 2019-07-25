import React from 'react';
import './App.css';
import {AwesomeButton} from "react-awesome-button";
import 'react-awesome-button/dist/themes/theme-c137.css';



class Pad extends React.Component{
  constructor(props){
    super(props);
    this.state={
      letter: props.param,
      song:''
    };    
    this.makeSound = this.makeSound.bind(this);
  }

  makeSound(){
    console.log("Button pressed");
  }

  render() {
    return(
      <div onClick={this.makeSound}>
        <AwesomeButton type="primary" className='drum-pad'>{this.state.letter}</AwesomeButton>
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
    this.setState((state,props) => {
      return {onOff: state.onOff == 'ON'? 'OFF':'ON'}
    });
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
          <audio autoPlay src={this.allSounds["firstList/Heater-1.mp3"]}></audio> 
          <div className="Grid" id="drum-machine">
              <Pad param='Q'></Pad>
              <Pad param='W'></Pad>
              <Pad param='E'></Pad>
              <Pad param='A'></Pad>
              <Pad param='S'></Pad>
              <Pad param='D'></Pad>
              <Pad param='Z'></Pad>
              <Pad param='X'></Pad>
              <Pad param='C'></Pad>
          </div>3
          <div onClick={this.changeOnOff}>
              <AwesomeButton type="primary" className='drum-pad' >{this.state.onOff}</AwesomeButton>
          </div>
        </div>
      </div>
    );
  }
}



export default App;