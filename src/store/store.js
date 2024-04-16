import { configureStore } from '@reduxjs/toolkit'
import todosReducer from '../feature/todoSlice'
import counterReducer  from '../feature/Counter'

export const store = configureStore({
  reducer: {
    todos: todosReducer,
    count:counterReducer
  }
})