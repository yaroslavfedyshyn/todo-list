import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';
import { reducer as formReducer } from 'redux-form';
import therapist from './stories/todos/reducer';

const rootReducer = combineReducers({
    routing: routerReducer,
    form: formReducer,
    therapist,
});

export default rootReducer;
