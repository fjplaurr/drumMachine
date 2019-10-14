import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

const Pad = (props) => {
  const {
    code, sendKey, keyActive, parLetter, parSound, onoff,
  } = props;
  let classN = 'drum-pad drumOn drumActivated';
  if (keyActive === parLetter && onoff) {
    classN = 'drum-pad drumOn drumActivated';
  } else if (!onoff) {
    classN = 'drum-pad drumOff';
  } else {
    classN = 'drum-pad drumOn';
  }
  return (
    <button
      type="button"
      id={code}
      onClick={sendKey}
      className={classN}
      value={parLetter}
    >
      {parLetter}
      <audio
        src={parSound}
        className="clip"
        id={parLetter}
      >
        <track kind="captions" />
      </audio>
    </button>
  );
};

function mapStateToProps(state) {
  return {
    onoff: state.onoff,
  };
}

Pad.propTypes = {
  code: PropTypes.number.isRequired,
  sendKey: PropTypes.func.isRequired,
  keyActive: PropTypes.string.isRequired,
  parLetter: PropTypes.string.isRequired,
  parSound: PropTypes.string.isRequired,
  onoff: PropTypes.bool.isRequired,
};

export default connect(mapStateToProps)(Pad);
