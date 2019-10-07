import React from 'react';
import { connect } from 'react-redux';
import { playlistOne, playlistTwo } from '../../audios';


const Display = (props) => {
    const { volStore, playlist, keyPressed, onOffStore } = props;
    return (
        <div className="display">
            <div>
                {playlist === 'CLASSIC' && keyPressed !== '' ?
                    playlistOne.filter(x => x.key === keyPressed)[0].name.toUpperCase() :
                    playlist === 'ELECTRO' && keyPressed !== '' ?
                        playlistTwo.filter(x => x.key === keyPressed)[0].name.toUpperCase() :
                        ''
                }
            </div>
            <div>{onOffStore ? `VOL:${volStore}` : ''}</div>
        </div>
    )
}

function mapStateToProps(state) {
    return {
        onOffStore: state.onoff,
        volStore: state.volume
    };
}

export default connect(mapStateToProps)(Display);

