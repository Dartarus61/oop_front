import React, { FC } from 'react'
import s from './Sidenav.module.css'

interface SidenavProps {
  side: string
  children?: React.ReactNode
}

const Sidenav: FC<SidenavProps> = ({ side, children }) => {
  return (
    <div className={`${s.sidenav} ${side === 'left' ? s.left : s.right}`}>
      {children}
    </div>
  )
}

export default Sidenav
