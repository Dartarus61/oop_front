import { combineReducers, configureStore } from '@reduxjs/toolkit'
import { articleApi } from './apis/articleService'
import { chapterApi } from './apis/chapterService'
import { commentApi } from './apis/commentService'
import { userApi } from './apis/userServis'
import { authSlice } from './slices/authSlice'

const rootReducer = combineReducers({
  auth: authSlice.reducer,
  [userApi.reducerPath]: userApi.reducer,
  [articleApi.reducerPath]: articleApi.reducer,
  [chapterApi.reducerPath]: chapterApi.reducer,
  [commentApi.reducerPath]: commentApi.reducer,
})

export const setupStore = () => {
  return configureStore({
    reducer: rootReducer,
    middleware: getDefaultMiddleware =>
      getDefaultMiddleware().concat(
        userApi.middleware,
        articleApi.middleware,
        chapterApi.middleware,
        commentApi.middleware
      ),
  })
}

export type RootState = ReturnType<typeof rootReducer>
export type AppStore = ReturnType<typeof setupStore>
export type AppDispatch = AppStore['dispatch']
