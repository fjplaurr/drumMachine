import React from 'react';
import './App.css';



const Pad = (props) => {
  return(
    <div className='drum-pad'>
      {props.param}
    </div>
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
