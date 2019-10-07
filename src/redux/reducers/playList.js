import { playListActionType } from '../actions/changePlayList';

function playList(state = 'CLASSIC', action) {
    switch (action.type) {
        case playListActionType:
            return action.payload;
        default:
            return state;
    }

}

export default playList;