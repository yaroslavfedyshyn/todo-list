import defaultState from './defaultState';
import {
    CREATE_NEW_TODO_REQUESTED,
    DELETE_TODO_REQUESTED,
    DONE_TODO_REQUESTED,
} from '../constants';
import createNewTodoRequested from './createNewTodoRequested';
import deleteTodoRequested from './deleteTodoRequested';
import doneTodoRequested from './doneTodoRequested';

export default (state = defaultState, action) => {
    const { type, payload } = action;

    switch (type) {
        case CREATE_NEW_TODO_REQUESTED:
            return createNewTodoRequested(state, payload);

        case DELETE_TODO_REQUESTED:
            return deleteTodoRequested(state, payload);

        case DONE_TODO_REQUESTED:
            return doneTodoRequested(state, payload);

        default:
            return state;
    }
};

export const getQuickRegistrationData = state => {
    return state.form.therapistQuickRegistration.values;
};
