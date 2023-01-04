import { FC } from 'react'
import CardList from '../CardList/CardList'
import s from './SectionDashboard.module.css'

interface ISectionDashboard {
  title: string
}

const SectionDashboard: FC<ISectionDashboard> = ({ title }) => {
  return (
    <div>
      <div className={s.text}>
        <div className={s.textTitile}>{title}</div>
        <div className={s.textTitile}>Информация о разделе</div>
        <div className={s.subTitile}>
          Этот раздел посвящен тому, этому, поэтому. Конец описания раздела
        </div>
      </div>
    </div>
  )
}

export default SectionDashboard
