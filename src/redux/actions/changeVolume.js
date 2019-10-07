export const volActionType = 'changeVolume';

const changeVolume = value => {
    return{
        type: volActionType,
        payload: value
    }
}

export default changeVolume;