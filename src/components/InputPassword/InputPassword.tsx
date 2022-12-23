import React, { FC, useState } from 'react'
import s from './InputPassword.module.css'
import VisibilityIcon from '@mui/icons-material/Visibility'
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff'

interface IInputPassword {
  label: string
  placeholder: string
  mb?: string
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void
  onBlur?: (e: React.FocusEvent<HTMLInputElement, Element>) => void
  value?: string
  helperText?: string
  error?: boolean
}

const InputPassword: FC<IInputPassword> = ({
  label,
  placeholder,
  mb,
  onChange,
  value,
  onBlur,
  helperText,
  error,
}) => {
  const [open, setOpen] = useState<boolean>(false)

  return (
    <div style={{ marginBottom: mb }} className={s.container}>
      <label className={s.inputLabel}>{label}</label>
      <input
        onChange={onChange}
        onBlur={onBlur}
        value={value}
        className={`${s.input} ${error && s.inputError}`}
        placeholder={placeholder}
        type={open ? 'text' : 'password'}
      />
      <div className={s.visibility}>
        {open ? (
          <VisibilityOffIcon
            sx={{ cursor: 'pointer' }}
            onClick={e => setOpen(false)}
          />
        ) : (
          <VisibilityIcon
            sx={{ cursor: 'pointer' }}
            onClick={e => setOpen(true)}
          />
        )}
      </div>
      <div className={s.helperTextContainer}>
        <div className={`${s.helperText} ${error && s.helperTextError}`}>
          {helperText}
        </div>
      </div>
    </div>
  )
}

export default InputPassword
