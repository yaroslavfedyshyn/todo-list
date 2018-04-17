import 'babel-polyfill';

import React from 'react';
import { render } from 'react-dom';
import { AppContainer } from 'react-hot-loader';
import store, { history } from './store/configureStore';
import Root from './components/Root';

// include favicon
import './favicon.ico';

// include styles
import './styles';

render(
    <AppContainer>
        <Root store={store} history={history} />
    </AppContainer>,
    document.getElementById('app'),
);

if (module.hot) {
    module.hot.accept('./components/Root', () => {
        const NewRoot = require('./components/Root').default;
        render(
            <AppContainer>
                <NewRoot store={store} history={history} />
            </AppContainer>,
            document.getElementById('app'),
        );
    });
}
