import React from 'react';
import ReactDOM from 'react-dom';

import App from './App';
import {setupStore} from "./store";
import {Provider} from "react-redux";
import {BrowserRouter} from "react-router-dom";
import './index.css'

const store = setupStore()
ReactDOM.render(
    <React.StrictMode>
        <BrowserRouter>
            <Provider store={store}>
                <App/>
            </Provider>
        </BrowserRouter>
    </React.StrictMode>,
    document.getElementById('root')
);