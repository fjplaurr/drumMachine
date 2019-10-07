export const turnActionType = 'turnOnOff';

const turnOnOff = boole => {
    return{
        type: turnActionType,
        payload: boole
    }
}

export default turnOnOff;