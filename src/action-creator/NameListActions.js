import { GET_LIST, INC, RESET_COUNTER, PUSH, ADD } from '../action-constants.js';

// data
import { nameList } from '../data/NameRefData.js';

export const getList = (listName) => ({ type: GET_LIST, data: nameList });

export const increment = () => ({ type: INC });

export const onReset = () => ({ type: RESET_COUNTER });

export const onPush = (payload) => ({ type: PUSH, payload });

export const onAdd = (payload) => ({ type: ADD, payload });