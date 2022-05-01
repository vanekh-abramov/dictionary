import { combineReducers, configureStore } from '@reduxjs/toolkit'
import toolkitSlice from './toolkitSlice'

const rootReducer = combineReducers({
  data: toolkitSlice
})

export const store = configureStore({
  reducer: rootReducer
})
// export default configureStore({
//   reducer: {
//     todos: todoReducer
//   }
// })
