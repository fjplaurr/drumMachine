import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { playlistOne, playlistTwo } from '../audios';

const Display = (props) => {
  const {
    volStore, playlist, keyPressed, onOffStore,
  } = props;
  let rend;
  if (playlist === 'CLASSIC' && keyPressed !== '') {
    rend = playlistOne.filter((x) => x.key === keyPressed)[0].name.toUpperCase();
  } else if (playlist === 'ELECTRO' && keyPressed !== '') {
    rend = playlistTwo.filter((x) => x.key === keyPressed)[0].name.toUpperCase();
  } else {
    rend = '';
  }
  return (
    <div className="display">
      <div>
        {rend}
      </div>
      <div>{onOffStore ? `VOL:${volStore}` : ''}</div>
    </div>
  );
};

function mapStateToProps(state) {
  return {
    onOffStore: state.onoff,
    volStore: state.volume,
  };
}

Display.propTypes = {
  volStore: PropTypes.number.isRequired,
  playlist: PropTypes.string.isRequired,
  keyPressed: PropTypes.string.isRequired,
  onOffStore: PropTypes.bool.isRequired,
};

export default connect(mapStateToProps)(Display);
