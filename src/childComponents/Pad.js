import React from 'react';



class Pad extends React.Component{
  constructor(props){
    super(props);
    this.audio = React.createRef();
  }

  makeSound = (e) =>{
    if(this.props.paramOnOff === 'OFF' || (e.type === 'keydown' && e.key.toUpperCase() !== this.props.paramLetter)) return;
    this.props.sendKey(this.props.paramLetter);
    this.audio.current.currentTime = 0;
    this.audio.current.volume = this.props.parVolume/100;
    this.audio.current.play();
  }

  componentWillMount(){
    document.addEventListener("keydown",this.makeSound.bind(this));
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


export default Pad;
