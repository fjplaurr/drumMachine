import React from 'react';


const PlaylistSelector = (props) => <button className={`butPlayList ${props.parOnOff && props.playList===props.playListActive?'plListActive': props.parOnOff && props.playList!==props.playListActive? 'plListDisabled':''}`} onClick={props.changePlaylist}>{props.playList}</button>

export default PlaylistSelector;