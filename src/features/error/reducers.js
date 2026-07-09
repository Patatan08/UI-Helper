import initialState from "./state";

const reducers = {
    setError: (state, action) => {
        state.error = action.payload
    },
    clearError: (state) => {
        state.error = initialState.error
    }
}

export default reducers;