import { Navigate } from 'react-router-dom'
import ArticlePage from '../pages/ArticlePage/ArticlePage'
import LoginPage from '../pages/LoginPage/LoginPage'
import MainPage from '../pages/MainPage/MainPage'
import RegisterPage from '../pages/RegisterPage/RegisterPage'
import SectiionPage from '../pages/SectionPage/SectionPage'
import SubSectionPage from '../pages/SubSectionPage/SubSectionPage'
import CreateArticlePage from '../pages/CreateArticlePage/CreateArticlePage'
import UserPage from '../pages/UserPage/UserPage'
import ForgetPassword from '../pages/ForgetPassword/ForgetPassword'
import ResetPassword from '../pages/ResetPassword/ResetPassword'
import AdminPage from '../pages/AdminPage/AdminPage'

interface IRouter {
  path: string
  element: React.ReactNode
}

export const publicRoutes: Array<IRouter> = [
  { path: '/main', element: <MainPage /> },
  { path: '/register', element: <RegisterPage /> },
  { path: '/login', element: <LoginPage /> },
  { path: '/forgetPassword', element: <ForgetPassword /> },
  { path: '/resetPassword', element: <ResetPassword /> },
  { path: '/section/:section/:subsection', element: <SubSectionPage /> },
  { path: '/article/:id', element: <ArticlePage /> },
  { path: '*', element: <Navigate to='/main' replace /> },
]

export const userRoutes: Array<IRouter> = [
  { path: '/main', element: <MainPage /> },
  { path: '/section/:section/:subsection', element: <SubSectionPage /> },
  { path: '/article/:id', element: <ArticlePage /> },
  { path: '/myProfile', element: <UserPage /> },
  { path: '/createArticle', element: <CreateArticlePage /> },
  { path: '/admin', element: <AdminPage /> },
  { path: '*', element: <Navigate to='/main' replace /> },
]
