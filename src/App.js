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
      keyPressed : ''
    };

  }

  componentWillMount(){
    function importAll(r) {
      let images = {};
      r.keys().map((item, index) => { images[item.replace('./', '')] = r(item); });
      return images;
    }
    var images = importAll(require.context('./images', false, /\.(png|jpe?g|svg)$/));
  }
  
  render() {
    return(
      <div className="App">
        <img src={images['aaa.png']}></img>
        <div className="Grid" id="drum-machine" >
            <Pad param='Q'></Pad>
            <Pad param='W'></Pad>
            <Pad param='E'></Pad>
            <Pad param='A'></Pad>
            <Pad param='S'></Pad>
            <Pad param='D'></Pad>
            <Pad param='Z'></Pad>
            <Pad param='X'></Pad>
            <Pad param='C'></Pad>
          </div>
      </div>
    );
  }
}



export default App;