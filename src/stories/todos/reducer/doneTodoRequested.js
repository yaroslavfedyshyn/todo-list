import deepCopy from 'deepcopy';

export default (state, payload) => {
    const newState = deepCopy(state);
    const item = newState.list.items.find(item => item.id === payload.itemId);

    item.done = true;

    return newState;
};
