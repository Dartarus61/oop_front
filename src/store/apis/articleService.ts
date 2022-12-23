import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/dist/query/react'
import { IArticleData } from '../../components/ArticleDashboard/ArticleDashboard'
import { ICard } from '../../components/Card/Card'
import { IArticle } from '../../components/CreateArticle/CreateArticle'
import { API_URL } from '../../http/index'

export const articleApi = createApi({
  reducerPath: 'articleApi',
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
  endpoints: build => ({
    createArticle: build.mutation<IArticle, FormData>({
      query: data => ({
        url: '/post/create',
        method: 'POST',
        body: data,
      }),
    }),
    getArticleById: build.query<IArticleData, number>({
      query: id => ({
        url: `/post/${id}`,
      }),
    }),
    getCardBySubtitle: build.query<ICard[], string>({
      query: value => ({
        url: `/post/getoff/sub/${value}`,
      }),
    }),
  }),
})
