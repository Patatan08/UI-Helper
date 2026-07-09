const reducers = {
    endFetching: (state, action) => {
        state.pendingRequests = state.pendingRequests.filter(actionName => actionName !== action.payload)
    },
    startFetching: (state, action) => {
        state.pendingRequests = [...state.pendingRequests, action.payload]
    }
}

export default reducers;