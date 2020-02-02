import { combineReducers } from 'redux';

// Reducers
import MyApp from './reducers/MyAppReducer.js'
import NameListReducer from './reducers/NameListReducers.js'


const reducer = combineReducers({
    MyApp,
    nameList: NameListReducer
});

export default reducer;