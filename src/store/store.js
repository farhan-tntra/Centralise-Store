import {  combineReducers, configureStore } from '@reduxjs/toolkit'
import todosReducer from '../feature/todoSlice'
import counterReducer  from '../feature/Counter'
import logger from 'redux-logger'

import storage from 'redux-persist/lib/storage';
import { persistReducer, persistStore } from 'redux-persist';

const persistConfig = {
  key: 'root',
  storage,
}
const reducers = combineReducers({
    todos: todosReducer,
    count:counterReducer
  },)

const persistedReducer = persistReducer(persistConfig, reducers)


export const store = persistStore(configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger),
}))