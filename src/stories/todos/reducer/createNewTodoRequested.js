export default (state, payload) => {
    const totalCount = state.list.items.length + 1;

    return {
        ...state,
        list: {
            ...state.list,
            items: [
                ...state.list.items,
                payload.item,
            ],
            totalCount,
            totalPages: Math.ceil(totalCount / state.list.query.count),
        },
    };
};
