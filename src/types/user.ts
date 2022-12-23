import { ICard } from '../components/Card/Card'

export interface IProfile {
  id: number
  name: string
  surname: string
  email: string
  roles: IRole[] // изменил, т.к. мы получаем массив объектов, а не массив строк
  commentCount: number
  postCount: number
  posts: ICard[]
}

export interface IRole {
  id: number
  description: string
  value: string
}

export interface IUserProfile {
  id: number
  name: string
  surname: string
}

export interface IBanUserRes { // response на бан пользователя
  id: number,
  banReason: string,
  userId: number
}

export interface IBanUserReq { // request на бан пользователя
  banReason: string,
  userId: number
}

export interface IChangeRole { // request на смену роли
  userId: number
  value: string
}

export interface IBanUser { // response списка пользователей
  id: number
  userId: number
  banReason: string
  user: IProfile
}
