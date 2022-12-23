import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/dist/query/react'
import { Option } from '../../components/Dropdown/Dropdown'
import { ISection } from '../../components/SidenavSection/SidenavSection'
import { API_URL } from '../../http/index'
import {IChangeRole} from "../../types/user";
import {IArticle} from "../../components/CreateArticle/CreateArticle";
import {IChapter} from "../../types/types";

export const chapterApi = createApi({
  reducerPath: 'chapterApi',
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
    getMenu: build.query<ISection[], void>({
      query: () => ({
        url: '/chapter/menu',
      }),
    }),

    addChapter: build.mutation<void, IChapter>({
      query: data => ({
        url: '/chapter/crch',
        method: 'POST',
        body: data,
      }),
    }),

    getChapters: build.query<string[], void>({
      query: () => ({
        url: '/chapter/',
      }),
    }),

    getSubChapters: build.query<string[], string>({
      query: value => ({
        url: `/chapter/subs/${value}`,
      }),
    }),
  }),
})
