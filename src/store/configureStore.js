import { createStore, compose, applyMiddleware } from 'redux';
import reduxImmutableStateInvariant from 'redux-immutable-state-invariant';
import thunk from 'redux-thunk';
import createHistory from 'history/createBrowserHistory';
import rootReducer from '../rootReducer';
import { routerMiddleware } from 'react-router-redux';
import sagaMiddleware, { runSaga } from '../middlewares/saga';
import loggerMiddleware from '../middlewares/logger';

export const history = createHistory();

function configureStoreProd(initialState) {
    const reactRouterMiddleware = routerMiddleware(history);
    const middlewares = [
        thunk,
        reactRouterMiddleware,
        sagaMiddleware,
    ];

    const store = createStore(
        rootReducer,
        initialState,
        compose(
            applyMiddleware(...middlewares),
        )
    );

    runSaga();

    return store;
}

function configureStoreDev(initialState) {
    const reactRouterMiddleware = routerMiddleware(history);
    const middlewares = [
        loggerMiddleware,
        reduxImmutableStateInvariant(),
        thunk,
        reactRouterMiddleware,
        sagaMiddleware,
    ];

    const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose; // add support for Redux dev tools
    const store = createStore(
        rootReducer,
        initialState,
        composeEnhancers(
            applyMiddleware(...middlewares),
        ),
    );

    if (module.hot) {
        // Enable Webpack hot module replacement for reducers
        module.hot.accept('../rootReducer', () => {
            const nextReducer = require('../rootReducer').default; // eslint-disable-line global-require
            store.replaceReducer(nextReducer);
        });
    }

    runSaga();

    return store;
}

const configureStore = process.env.NODE_ENV === 'development' ? configureStoreDev : configureStoreProd;

export default configureStore();
