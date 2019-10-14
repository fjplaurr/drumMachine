import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import turnOnOff from '../redux/actions/turnOnOff';

class PowerOnOff extends React.Component {
  constructor(props) {
    super(props);
    this.powerClick = this.powerClick.bind(this);
  }

  powerClick() {
    const { onoff } = this.props;
    this.props.turnOnOff(!onoff);
  }

  render() {
    const { onoff } = this.props;
    return (
      <button
        type="button"
        className={`powerButton ${onoff ? 'powerOn' : 'powerOff'}`}
        onClick={this.powerClick}
      >
        <i className="fas fa-power-off" />
      </button>
    );
  }
}

function mapStateToProps(state) {
  return {
    onoff: state.onoff,
  };
}

const mapDispatchToProps = {
  turnOnOff
};

PowerOnOff.propTypes = {
  onoff: PropTypes.bool.isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(PowerOnOff);