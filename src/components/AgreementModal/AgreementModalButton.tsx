import React, { FC } from 'react'
import s from './AgreementModal.module.css'

interface IModalButton {
  text: string
  mt?: string
  mb?: string
  onClick?: (e: React.MouseEvent<HTMLDivElement>) => void
  disabled?: boolean
}

const AgreementModalButton: FC<IModalButton> = ({
  text,
  mt,
  mb,
  onClick,
  disabled,
}) => {
  return (
    <div
      onClick={onClick}
      style={{ marginTop: mt, marginBottom: mb }}
      className={`${s.button} ${disabled && s.buttonDissabled}`}
    >
      {text}
    </div>
  )
}

export default AgreementModalButton
