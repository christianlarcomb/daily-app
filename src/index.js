import React from 'react';
import ReactDOM from 'react-dom';
import App from './App.jsx';

/* React Router */
import { BrowserRouter } from "react-router-dom";

/* Redux */
import {Provider} from 'react-redux'
import store from './redux/store'
import {ThemeProvider} from "styled-components";

/* Primary Function */
ReactDOM.render(
    <Provider store={store}>
        <BrowserRouter>
                <App/>
        </BrowserRouter>
    </Provider>
    , document.getElementById('mount'));
