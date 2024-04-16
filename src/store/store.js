import {  combineReducers, configureStore } from '@reduxjs/toolkit'
import todosReducer from '../feature/todoSlice'
import counterReducer  from '../feature/Counter'
import logger from 'redux-logger'


const reducers = combineReducers({
    todos: todosReducer,
    count:counterReducer
  },)

export const store = configureStore({
  reducer: reducers,
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger),
})