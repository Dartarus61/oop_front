import React, { FC } from 'react'
import s from './AuthButton.module.css'

interface IAuthButton {
  text: string
  mt?: string
  mb?: string
  onClick?: (e: React.MouseEvent<HTMLButtonElement>) => void
  disabled?: boolean
}

const AuthButton: FC<IAuthButton> = ({ text, mt, mb, onClick, disabled }) => {
  return (
    <button
      disabled={disabled || false}
      onClick={onClick}
      style={{ marginTop: mt, marginBottom: mb }}
      className={disabled ? s.buttonDissabled : s.button}
    >
      {text}
    </button>
  )
}

export default AuthButton
