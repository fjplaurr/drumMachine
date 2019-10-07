import {turnActionType} from '../actions/turnOnOff';

function onoff(state = true, action) {
    switch (action.type) {
        case turnActionType: {
            return action.payload;
        }
        default:
            return state;
    }
}

export default onoff;