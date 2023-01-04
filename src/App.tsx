import { HashRouter } from 'react-router-dom'
import { useEffect } from 'react'
import s from './App.module.css'
import { useAction } from './hooks/useAction'
import AppRouter from './routes/AppRouter'

const App = () => {
  const { cheackAuth } = useAction()

  useEffect(() => {
    localStorage.getItem('token') && cheackAuth()
  }, [])

  return (
    <HashRouter>
      <div className={s.App}>
        <AppRouter />
      </div>
    </HashRouter>
  )
}

export default App
