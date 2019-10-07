import { volActionType } from '../actions/changeVolume';

function volume(state = 50, action) {
    switch (action.type) {
        case volActionType: {
            return action.payload;
        }
        default:
            return state;
    }
}

export default volume;