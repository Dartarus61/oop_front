import React, { FC, useState } from 'react'
import s from './CheckedButton.module.css'

interface ICheckedButton {
  children?: React.ReactNode
  width?: string
}

const CheckedButton: FC<ICheckedButton> = ({ children, width }) => {
  const [checked, setChecked] = useState<boolean>(false)

  return (
    <div className={s.container}>
      <div className={s.checkbox} onClick={() => setChecked(!checked)}>
        <input
          type='checkbox'
          checked={checked}
          onChange={() => {}}
          className={s.input}
        />
      </div>
      <div style={{ width }} className={s.labelContainer}>
        {children}
      </div>
    </div>
  )
}

export default CheckedButton
