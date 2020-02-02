import { GET_LIST, INC, RESET_COUNTER } from '../action-constants.js';

function MyApp(state = {
    msg: 'Jay',
    count: 0,
    temp: []
}, action) {
    switch(action.type) {
        case "HI":
            return {
                ...state,
                msg: 'HI'
            };
         break;
        case INC:
        return {
            ...state,
            count: state.count + 1,
        }
        case 'DEC':
        return {
            ...state,
            count: state.count - 2,
        }
        case RESET_COUNTER:
        return {
            ...state,
            count: 0,
        }
        case 'PUSH':
        state.temp.push(action.payload);
        return state;
         default:
            return state;
    }
}

export default MyApp;
