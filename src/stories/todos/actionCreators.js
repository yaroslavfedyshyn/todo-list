import {
    CREATE_NEW_TODO_REQUESTED,
    DELETE_TODO_REQUESTED,
    DONE_TODO_REQUESTED,
} from './constants';

export const createNewTodoRequested = (payload = {}) => ({
    type: CREATE_NEW_TODO_REQUESTED,
    payload,
});

export const deleteTodoRequested = (payload = {}) => ({
    type: DELETE_TODO_REQUESTED,
    payload,
});

export const doneTodoRequested = (payload = {}) => ({
    type: DONE_TODO_REQUESTED,
    payload,
});
