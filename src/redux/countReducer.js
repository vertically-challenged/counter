const countReducer = (state = 0, action) => {
    if (action.type === 'INCREMENT') {
        return state + 1
    } else if (action.type === 'DECREMENT') {
        return state - 1
    } else if (action.type === 'ASYNC_INCREMENT') {
        return state + 1
    }
    return state
}

export default countReducer