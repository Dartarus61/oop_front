import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/dist/query/react'
import {
  IComment,
  IUserComment,
} from '../../components/CommentList/CommentList'
import { API_URL } from '../../http/index'

export const commentApi = createApi({
  reducerPath: 'commentApi',
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
  tagTypes: ['Comment'],
  endpoints: build => ({
    getCommentById: build.query<IComment[], number>({
      query: id => ({
        url: `/comment/${id}`,
      }),
      providesTags: result => ['Comment'],
    }),
    createComment: build.mutation<IUserComment, IUserComment>({
      query: data => ({
        url: `/comment/setcom`,
        method: 'POST',
        body: data,
      }),
      invalidatesTags: ['Comment'],
    }),
  }),
})
