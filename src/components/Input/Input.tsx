import React, { FC } from 'react'
import s from './Input.module.css'

interface IInput {
  label: string
  placeholder: string
  mb?: string
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void
  onBlur?: (e: React.FocusEvent<HTMLInputElement, Element>) => void
  value?: string
  helperText?: string
  error?: boolean
}

const Input: FC<IInput> = ({
  label,
  placeholder,
  mb,
  onChange,
  value,
  onBlur,
  helperText,
  error,
}) => {
  return (
    <div style={{ marginBottom: mb }} className={s.container}>
      <label className={s.inputLabel}>{label}</label>
      <input
        onChange={onChange}
        onBlur={onBlur}
        value={value}
        className={`${s.input} ${error && s.inputError}`}
        placeholder={placeholder}
      />
      <div className={s.helperTextContainer}>
        <div className={`${s.helperText} ${error && s.helperTextError}`}>
          {helperText}
        </div>
      </div>
    </div>
  )
}

export default Input
