import { FC } from 'react'
import CardList from '../CardList/CardList'

import s from './MainDashboard.module.css'

const MainDashboard: FC = () => {
  return (
    <div>
      <div className={s.text}>
        <div className={s.textTitile}>Общая информация</div>
        <div className={s.subTitile}>
          От программистов. Для программистов. Из страданий программистов...
        </div>
        <div className={s.subTitile}>
          Ресурс предназначен для изучения, обмена информацией и совместного
          поиска ответов на вопросы, касающиеся различных языков
          программирования.
        </div>
      </div>
    </div>
  )
}

export default MainDashboard
