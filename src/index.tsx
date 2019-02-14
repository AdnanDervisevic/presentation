import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { CollectorPortalFramework } from 'collector-portal-framework';
import { BrowserRouter } from 'react-router-dom';

ReactDOM.render(
    <BrowserRouter>
        <CollectorPortalFramework>
            <App />
        </CollectorPortalFramework>
    </BrowserRouter>,
    document.getElementById('root')
);
