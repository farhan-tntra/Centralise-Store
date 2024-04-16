import { Tuple, configureStore } from '@reduxjs/toolkit'
import todosReducer from '../feature/todoSlice'
import counterReducer  from '../feature/Counter'
import logger from 'redux-logger'

export const store = configureStore({
  reducer: {
    todos: todosReducer,
    count:counterReducer
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger),
})