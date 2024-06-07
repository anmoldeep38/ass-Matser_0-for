import React from 'react';
import { Provider } from 'react-redux';
import store from './redux/store.js';
import Game from './components/Game.js';
import './assets/styles.css';

const App = () => (
    <Provider store={store}>
        <Game />
    </Provider>
);

export default App;
