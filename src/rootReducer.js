import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';
import { reducer as formReducer } from 'redux-form';
import todos from './stories/todos/reducer';

const rootReducer = combineReducers({
    routing: routerReducer,
    form: formReducer,
    todos,
});

export default rootReducer;
