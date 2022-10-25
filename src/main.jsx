import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import App from './App';
import { store } from './store';
import ScopedCssBaseline from '@mui/material/ScopedCssBaseline';

ReactDOM.createRoot(document.getElementById('root')).render(
    <ScopedCssBaseline>
        <Provider store={store}>
            <App />
        </Provider>
    </ScopedCssBaseline>
);
