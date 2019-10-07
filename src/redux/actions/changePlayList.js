export const playListActionType = 'changePlayList';

const changePlayList = playListName => {
    return{
        type: playListActionType,
        payload: playListName
    }
}


export default changePlayList;