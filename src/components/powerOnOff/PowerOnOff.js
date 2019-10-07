import React from 'react';
import { connect } from 'react-redux';
import turnOnOff from '../../redux/actions/turnOnOff';


class PowerOnOff extends React.Component {
    constructor(props) {
        super(props);
        this.powerClick = this.powerClick.bind(this);
    }

    powerClick() {
        this.props.turnOnOff(!this.props.onoff);
    }

    render() {
        return <button className={`powerButton ${this.props.onoff ? 'powerOn' : 'powerOff'}`} onClick={this.powerClick}><i className="fas fa-power-off" /></button>
    }
}


const mapStateToProps = (state) => {
    return {
        onoff: state.onoff,
    };
};


const mapDispatchToProps = {
    turnOnOff
};


export default connect(mapStateToProps, mapDispatchToProps)(PowerOnOff);