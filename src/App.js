import React from 'react';
import './App.css';
import {AwesomeButton} from "react-awesome-button";
import 'react-awesome-button/dist/themes/theme-c137.css';

const Pad = (props) => {
  return(
    <AwesomeButton type="primary" className='drum-pad'   >
      {props.param}
    </AwesomeButton>
  );
}


class App extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      keyPressed : ''
    };
  }
  
  
  render() {
    return(
      <div className="App">
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
          </div>
      </div>
    );
  }
}







export default App;
