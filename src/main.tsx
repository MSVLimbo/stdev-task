import ReactDOM from 'react-dom/client';
import { createGenerateId, JssProvider, SheetsRegistry } from 'react-jss';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';

import store from './store';
import App from './app';

import { initAPI } from './api/initAPI';
import './i18n';

initAPI();

const container = document.getElementById('root') as HTMLElement;
const rootContainer = ReactDOM.createRoot(container);

rootContainer.render(
    <Provider store={store}>
        <JssProvider
            registry={new SheetsRegistry()}
            generateId={createGenerateId({ minify: true })}
            classNamePrefix={`stdev-`}
        >
            <BrowserRouter>
                    <App />
            </BrowserRouter>
        </JssProvider>
    </Provider>,
);