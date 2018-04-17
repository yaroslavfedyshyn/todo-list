import defaultState from './defaultState';
import {
    CREATE_NEW_TODO_REQUESTED,
} from '../constants';
import createNewTodoRequested from './createNewTodoRequested';

export default (state = defaultState, action) => {
    const { type, payload } = action;

    switch (type) {
        case CREATE_NEW_TODO_REQUESTED:
            return createNewTodoRequested(state, payload);

        default:
            return state;
    }
};

export const getQuickRegistrationData = state => {
    return state.form.therapistQuickRegistration.values;
};
