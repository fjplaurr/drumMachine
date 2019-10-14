import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import changePlayList from '../redux/actions/changePlayList';

class PlaylistSelector extends React.Component {
  constructor(props) {
    super(props);
    this.clickPlayList = this.clickPlayList.bind(this);
  }

  clickPlayList(event) {
    this.props.changePlayList(event.currentTarget.innerHTML);
  }

  render() {
    const { onoff, playList, playListProp } = this.props;
    let classN;
    if (onoff && playList === playListProp) {
      classN = 'butPlayList plListActive';
    } else if (onoff && playList !== playListProp) {
      classN = 'butPlayList plListDisabled';
    } else {
      classN = 'butPlayList';
    }
    return (
      <button
        type="button"
        className={classN}
        onClick={this.clickPlayList}
      >
        {playList}
      </button>
    );
  }
}

function mapStateToProps(state) {
  return {
    onoff: state.onoff,
    playListProp: state.playList,
  };
}

const mapDispatchToProps = {
  changePlayList,
};

PlaylistSelector.propTypes = {
  changePlayList: PropTypes.func.isRequired,
  onoff: PropTypes.bool.isRequired,
  playList: PropTypes.string.isRequired,
  playListProp: PropTypes.string.isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(PlaylistSelector);
