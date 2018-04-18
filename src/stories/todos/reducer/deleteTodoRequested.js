import deepCopy from 'deepcopy';

export default (state, payload) => {
    const newState = deepCopy(state);
    const itemIndex = newState.list.items.findIndex(item => item.id === payload.itemId);

    if (itemIndex > -1) {
        newState.list.items.splice(itemIndex, 1);
    }

    return newState;
};
