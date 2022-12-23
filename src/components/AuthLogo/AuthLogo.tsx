import React from 'react'
import s from './AuthLogo.module.css'

const AuthLogo = () => {
  return (
    <div className={s.appName}>
      <div className={s.appLogo}>I.Z.G.I.P.</div>
      <div className={s.appSubLogo}>сайт-методичка</div>
    </div>
  )
}

export default AuthLogo
