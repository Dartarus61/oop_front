import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/dist/query/react'
import { API_URL } from '../../http/index'
import {IBanUser, IBanUserReq, IBanUserRes, IChangeRole, IProfile, IUserProfile} from '../../types/user'
import {IArticle} from "../../components/CreateArticle/CreateArticle";

export const userApi = createApi({
  reducerPath: 'userApi',
  baseQuery: fetchBaseQuery({
    baseUrl: `${API_URL}`,
    prepareHeaders: headers => {
      const token = localStorage.getItem('token')

      if (token) {
        headers.set('authorization', `Bearer ${token}`)
      }

      return headers
    },
  }),
  tagTypes: ['Profile'],
  endpoints: build => ({
    fetchProfile: build.query<IProfile, void>({
      query: () => ({
        url: '/user/profile',
      }),
      providesTags: result => ['Profile'],
    }),
    updateProfile: build.mutation<IProfile, IUserProfile>({
      query: data => ({
        url: '/auth/updata',
        method: 'PUT',
        body: data,
      }),
      invalidatesTags: ['Profile'],
    }),
    banUser: build.mutation<IBanUserRes, IBanUserReq>({
      query: data => ({
        url: '/user/ban',
        method: 'POST',
        body: data,
      }),
      invalidatesTags: ['Profile'],
    }),
    unbanUser: build.mutation<IBanUserRes, number>({
      query: id => ({
        url: '/user/unban',
        method: 'POST',
        body: {userId: id},
      }),
      invalidatesTags: ['Profile'],
    }),
    addRole: build.mutation<void, IChangeRole>({
      query: data => ({
        url: '/user/addrole',
        method: 'POST',
        body: data,
      }),
      invalidatesTags: ['Profile'],
    }),
    deleteRole: build.mutation<void, IChangeRole>({
      query: data => ({
        url: '/user/delrole',
        method: 'DELETE',
        body: data,
      }),
      invalidatesTags: ['Profile'],
    }),
    getAllUsers: build.query<IProfile[], void>({
      query: data => ({
        url: '/user/all',
      }),
      providesTags: result => ['Profile'],
    }),
    getAllBans: build.query<IBanUser[], void>({
      query: data => ({
        url: '/user/banlist',
      }),
      providesTags: result => ['Profile'],
    }),
  }),
})
