import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { IUser } from '../../model/User'

export interface UserState {
  user: IUser
  isLoading: boolean
  error: string
  success: boolean
}

const initialState: UserState = {
  user: {
    token: '',
    user: {
      id: 0,
      isActivated: false,
      email: '',
    },
  },
  isLoading: false,
  error: '',
  success: false,
}

export const authSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    userFetching(state) {
      state.isLoading = true
    },
    userFetchingSuccess(state, action: PayloadAction<IUser>) {
      state.isLoading = false
      state.error = ''
      state.user = action.payload
    },
    userFetchingError(state, action: PayloadAction<string>) {
      state.isLoading = false
      state.error = action.payload
    },
    userClearError(state) {
      state.error = ''
    },
    userSetSuccess(state, action: PayloadAction<boolean>) {
      state.success = action.payload
    },
    userClear(state) {
      state = initialState
    },
  },
})
