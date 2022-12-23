import { AppDispatch } from '..'
import AuthService from '../../service/authService'
import { authSlice } from '../slices/authSlice'

export const register =
  (email: string, password: string, name: string, surname: string) =>
  async (dispatch: AppDispatch) => {
    try {
      dispatch(authSlice.actions.userFetching())
      const response = await AuthService.registration(
        email,
        password,
        name,
        surname
      )
      localStorage.setItem('token', response.data.token)
      dispatch(authSlice.actions.userFetchingSuccess(response.data))
      dispatch(authSlice.actions.userSetSuccess(true))
    } catch (e: any) {
      dispatch(authSlice.actions.userFetchingError(e.response.data.message))
    }
  }

export const login =
  (email: string, password: string) => async (dispatch: AppDispatch) => {
    try {
      dispatch(authSlice.actions.userFetching())
      const response = await AuthService.login(email, password)
      localStorage.setItem('token', response.data.token)
      dispatch(authSlice.actions.userFetchingSuccess(response.data))
    } catch (e: any) {
      dispatch(authSlice.actions.userFetchingError(e.response.data.message))
    }
  }

export const cheackAuth = () => async (dispatch: AppDispatch) => {
  try {
    dispatch(authSlice.actions.userFetching())
    const response = await AuthService.refresh()
    localStorage.setItem('token', response.data.token)
    dispatch(authSlice.actions.userFetchingSuccess(response.data))
  } catch (e: any) {
    localStorage.removeItem('token')
    dispatch(authSlice.actions.userFetchingError(e.response.data.message))
  }
}

export const forgotPassword =
  (email: string) => async (dispatch: AppDispatch) => {
    try {
      dispatch(authSlice.actions.userFetching())
      await AuthService.forgotPassword(email)
      dispatch(
        authSlice.actions.userFetchingSuccess({
          token: '',
          user: { id: -1, email, isActivated: false },
        })
      )
    } catch (e: any) {
      dispatch(authSlice.actions.userFetchingError(e.response.data.message))
    }
  }

export const newPassword =
  (code: string, password: string) => async (dispatch: AppDispatch) => {
    try {
      dispatch(authSlice.actions.userFetching())
      const response = await AuthService.newPassword(code, password)
      localStorage.setItem('token', response.data.token)
      dispatch(authSlice.actions.userFetchingSuccess(response.data))
    } catch (e: any) {
      dispatch(authSlice.actions.userFetchingError(e.response.data.message))
    }
  }

export const switchPassword =
  (id: number, password: string, newPassword: string) =>
  async (dispatch: AppDispatch) => {
    try {
      dispatch(authSlice.actions.userFetching())
      const response = await AuthService.switchPassword(
        id,
        password,
        newPassword
      )
      localStorage.setItem('token', response.data.token)
      dispatch(authSlice.actions.userFetchingSuccess(response.data))
      dispatch(authSlice.actions.userSetSuccess(true))
    } catch (e: any) {
      dispatch(authSlice.actions.userFetchingError(e.response.data.message))
    }
  }

export const logout = () => async (dispatch: AppDispatch) => {
  dispatch(
    authSlice.actions.userFetchingSuccess({
      token: '',
      user: { id: -1, email: '', isActivated: false },
    })
  )
  localStorage.removeItem('token')
}

export const clearErrorAuth = () => async (dispatch: AppDispatch) => {
  dispatch(authSlice.actions.userClearError())
}

export const setSuccess =
  (success: boolean) => async (dispatch: AppDispatch) => {
    dispatch(authSlice.actions.userSetSuccess(success))
  }

export const clearUser = () => async (dispatch: AppDispatch) => {
  dispatch(authSlice.actions.userClear())
}
