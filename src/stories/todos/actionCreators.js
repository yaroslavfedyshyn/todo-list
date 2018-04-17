import {
    CREATE_NEW_TODO_REQUESTED,
} from './constants';

export const createNewTodoRequested = (payload = {}) => ({
    type: CREATE_NEW_TODO_REQUESTED,
    payload,
});
