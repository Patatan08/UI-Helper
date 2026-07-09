import { createSlice } from '@reduxjs/toolkit';
import initialState from './state';
import reducers from './reducers';

export const applicationSlice = createSlice({
    name: 'application',
    initialState,
    reducers
});

//Export akcji powiązanych z reducerem.
export const { setRedirect, clearRedirect, setInstallationDetails, clearInstallationDetails, setSettings, clearSettings } = applicationSlice.actions;

export default applicationSlice.reducer; 