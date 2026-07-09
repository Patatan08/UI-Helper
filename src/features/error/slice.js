import { createSlice } from '@reduxjs/toolkit';
import initialState from './state';
import reducers from './reducers';

export const errorSlice = createSlice({
    name: 'error',
    initialState,
    reducers
});

//Export akcji powiązanych z reducerem.
export const { setError, clearError } = errorSlice.actions;

export default errorSlice.reducer; 