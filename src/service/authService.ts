import $api from '../http'
import { AxiosResponse } from 'axios'
import { IUser } from '../model/User'
export default class AuthService {
  static async login(
    email: string,
    password: string
  ): Promise<AxiosResponse<IUser>> {
    return $api.post<IUser>('/auth/login', { email, password })
  }

  static async registration(
    email: string,
    password: string,
    name: string,
    surname: string
  ): Promise<AxiosResponse<IUser>> {
    return $api.post<IUser>('/auth/registration', {
      email,
      password,
      name,
      surname,
    })
  }

  static async forgotPassword(email: string): Promise<AxiosResponse<IUser>> {
    return $api.post<IUser>('/auth/forgotPassword', {
      email,
    })
  }

  static async switchPassword(
    id: number,
    password: string,
    newPassword: string
  ): Promise<AxiosResponse<IUser>> {
    return $api.post<IUser>('/auth/switchPassword', {
      id,
      password,
      newPassword,
    })
  }

  static async newPassword(
    code: string,
    newPass: string
  ): Promise<AxiosResponse<IUser>> {
    return $api.post<IUser>('/auth/newPass', {
      code,
      newPass,
    })
  }

  static async refresh(): Promise<AxiosResponse<IUser>> {
    return await $api.get<IUser>(`/auth/refresh`, { withCredentials: true })
  }
}
