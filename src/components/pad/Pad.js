import React from 'react';
import {connect} from 'react-redux';


const Pad = (props) => {
  const { code, sendKey, keyActive, parLetter, parSound, onoff} = props;
  return (
    <button id={code} onClick={sendKey} className={keyActive === parLetter && onoff ?
      'drum-pad drumOn drumActivated' : !onoff ? 'drum-pad drumOff' : 'drum-pad drumOn'} value={parLetter}> {parLetter}
      <audio src={parSound} className="clip" id={parLetter}></audio>
    </button>
  );
}


function mapStateToProps (state) {
  return {
    onoff: state.onoff
  }
}

export default connect(mapStateToProps)(Pad);
