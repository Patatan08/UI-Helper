import { createSlice } from '@reduxjs/toolkit';
import reducers from "./reducers";
import initialState from './state';

export const dataFetchingSlice = createSlice({
    name: 'dataFetching',
    initialState,
    reducers
});

//Export akcji powiązanych z reducerem.
export const { endFetching, startFetching } = dataFetchingSlice.actions;

export default dataFetchingSlice.reducer; 