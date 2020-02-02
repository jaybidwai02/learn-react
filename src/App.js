import React from 'react';
import { Provider } from 'react-redux';
//import logo from './logo.svg';
import './App.css';

// Store
import store from './store.js'

//Components
import MyApp from './components/MyApp.jsx'

function App() {
  return (
    <div className="App">
    <Provider store={store}>
      <MyApp />
     </Provider>
    </div>
  );
}

export default App;
