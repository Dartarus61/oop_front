import { publicRoutes, userRoutes } from './rout'
import { Routes, Route } from 'react-router-dom'
import { useTypeSelector } from '../hooks/useTypeSelector'

const AppRouter = () => {
  const { user } = useTypeSelector(store => store.auth)

  if (user.user.isActivated) {
    return (
      <Routes>
        {userRoutes.map(route => (
          <Route path={route.path} element={route.element} key={route.path} />
        ))}
      </Routes>
    )
  } else {
    return (
      <Routes>
        {publicRoutes.map(route => (
          <Route path={route.path} element={route.element} key={route.path} />
        ))}
      </Routes>
    )
  }
}

export default AppRouter
