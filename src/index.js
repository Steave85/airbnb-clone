import React from 'react';
import ReactDOM from 'react-dom';
import './styles/index.css';
import App from './App';
import { RoomProvider } from './context/RoomProvider';
import Reducer, { initialState } from './context/Reducer';
import * as serviceWorker from './config/serviceWorker';

ReactDOM.render(
  <React.StrictMode>
    <RoomProvider initialState={initialState} Reducer={Reducer}>
      <App />
    </RoomProvider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
