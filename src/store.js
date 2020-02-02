import { createStore, applyMiddleware, compose } from 'redux';
import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit'
import logger from 'redux-logger';

// Reducer
import reducer from './reducer.js'

const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;


function configureAppStore(initialState) {
    const store = configureStore({
        reducer,
        middleware: [logger, ...getDefaultMiddleware()],
        initialState
    });

     /*if (process.env.NODE_ENV !== 'production' && module.hot) {
        module.hot.accept('./reducer', () => store.replaceReducer(reducer))
      }*/

    return store;
}


const store = configureAppStore()


/*const store = createStore(
reducer,
composeEnhancer(applyMiddleware(logger)),
);*/
//window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),

/*const store = configureStore({
    reducer
})*/

console.log(store.getState());

store.dispatch({ type: 'test' })

export default store;