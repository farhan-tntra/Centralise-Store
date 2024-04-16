import { configureStore } from '@reduxjs/toolkit'
import todosReducer from '../feature/todosSlice'
// import filtersReducer from '../features/filters/filtersSlice'

export const store = configureStore({
  reducer: {
    todos: todosReducer,
  }
})