import React, { FC } from 'react'
import { useNavigate } from 'react-router-dom'
import s from './AuthTransition.module.css'

interface IAuthTransition {
  text?: string
  textButton: string
  mt?: string
  onClick?: () => void
}

const AuthTransition: FC<IAuthTransition> = ({
  text,
  mt,
  textButton,
  onClick,
}) => {
  return (
    <div className={s.container}>
      {text && <div className={s.transitionText}>{text}</div>}
      <div style={{ marginTop: mt }} onClick={onClick} className={s.button}>
        {textButton}
      </div>
    </div>
  )
}

export default AuthTransition
