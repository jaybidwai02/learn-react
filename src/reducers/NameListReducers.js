import { GET_LIST, INC, RESET_COUNTER, ADD } from '../action-constants.js';

function NameListReducer(state = {
totalPersons: 0
}, action) {
    switch(action.type) {
        case GET_LIST:
        return {
          ...state,
          nameList: [
            ...action.data
          ]
        }
        case ADD:
        return {
            ...state,
            totalPersons: state.totalPersons + action.payload
        }
        default:
        return state;
    }
}

export default NameListReducer;