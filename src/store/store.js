import { combineReducers, configureStore } from '@reduxjs/toolkit'
import thunkMiddleware from 'redux-thunk'
import applicationReducer from 'features/application/slice';
import dataFetchingReducer from 'features/dataFetching/slice';
import errorReducer from 'features/error/slice';
import api from './middlewares/api';


const reducers = combineReducers({
  application: applicationReducer,
  dataFetching: dataFetchingReducer,
  error: errorReducer
});

const rootReducer = (state, action) => {
  if (action.type === 'RESET_FULL_REDUX_STATE') {
    return reducers(undefined, action);
  }
  return reducers(state, action);
};

export const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) => getDefaultMiddleware({ serializableCheck: false }).concat(thunkMiddleware).concat(api),
  devTools: process.env.NODE_ENV !== 'any', //devtool tylko na debug
});

export const resetFullReduxState = () => ({
  type: 'RESET_FULL_REDUX_STATE'
});

export default store;
