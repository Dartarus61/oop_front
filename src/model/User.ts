export interface IReqUser {
  email: string
  password: string
  name: string
  surname: string
}

export interface IUser {
  token: string
  user: {
    id: number
    email: string
    isActivated: boolean
  }
}
