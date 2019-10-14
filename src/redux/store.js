import { createStore, combineReducers } from 'redux';
import onoff from './reducers/onoff';
import volume from './reducers/volume';
import playList from './reducers/playList';

const reducer = combineReducers({
    onoff, volume, playList
})

const store = createStore(reducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

export default store;