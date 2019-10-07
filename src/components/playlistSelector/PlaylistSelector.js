import React from 'react';
import { connect } from 'react-redux';
import changePlayList from '../../redux/actions/changePlayList';
import store from '../../redux/store';


class PlaylistSelector extends React.Component {
    constructor(props) {
        super(props);
        this.clickPlayList = this.clickPlayList.bind(this);
    }

    clickPlayList(event) {
        this.props.changePlayList(event.currentTarget.innerHTML);
        console.log(store.getState());
    }

    render() {
        const { onoff, playList, playListProp } = this.props;
        return (
            <button className={`butPlayList ${onoff && playList === playListProp ? 'plListActive' : onoff && playList !== playListProp ? 'plListDisabled' : ''}`} onClick={this.clickPlayList}>
                {playList}
            </button >
        )
    }
}

function mapStateToProps(state) {
    return {
        onoff: state.onoff,
        playListProp: state.playList
    }
}

const mapDispatchToProps = {
    changePlayList
}

export default connect(mapStateToProps, mapDispatchToProps)(PlaylistSelector);