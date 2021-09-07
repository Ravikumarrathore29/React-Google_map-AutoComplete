import {combineReducers} from 'redux';
import inputReducer from './Input/InputReducer';
import mapReducer from './Map/MapReducer';

const rootReducer = combineReducers({
   userInput: inputReducer,
    googleMapData: mapReducer
})

export default rootReducer