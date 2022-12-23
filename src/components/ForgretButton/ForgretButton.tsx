import React, { FC } from 'react'
import { useNavigate } from 'react-router-dom'
import s from './ForgretButton.module.css'

interface IForgetButton {
  textButton: string
  mt?: string
}

const ForgretButton: FC<IForgetButton> = ({ mt, textButton }) => {
  const navigator = useNavigate()
  return (
    <div className={s.container}>
      <div
        style={{ marginTop: mt }}
        onClick={() => {
          navigator('/forgetPassword')
        }}
        className={s.button}
      >
        {textButton}
      </div>
    </div>
  )
}

export default ForgretButton
