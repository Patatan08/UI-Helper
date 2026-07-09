import initialState from "./state";

const reducers = {
    setRedirect: (state, action) => {
        state.redirect = action.payload
    },

    clearRedirect: (state) => {
        state.redirect = initialState.redirect
    },

    setInstallationDetails: (state, action) => {
        state.eblVersion = action.payload.installationInfo.eblVersion
        state.databaseName = action.payload.installationInfo.databaseName
    },

    clearInstallationDetails: (state) => {
        state.eblVersion = initialState.eblVersion
        state.databaseName = initialState.databaseName
    },

    setSettings: (state, action) => {
        state.settings = action.payload.settings
    },
    clearSettings: (state) => {
        state.settings = initialState.settings
    },
}

export default reducers;