import { configureStore } from '@reduxjs/toolkit'
import { rootSlice } from './rootReducer.ts';


export const store = configureStore({
  reducer: rootSlice.reducer
})

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch