import { FC } from 'react'
import { useParams } from 'react-router-dom'
import { articleApi } from '../../store/apis/articleService'
import CardList from '../CardList/CardList'
import s from './SubSectionDashboard.module.css'

const SubSectionDashboard: FC = () => {
  const params = useParams()
  const { data: cards, isLoading } = articleApi.useGetCardBySubtitleQuery(
    params?.subsection || ''
  )

  return (
    <div>
      <div className={s.text}>
        <div className={s.textTitile}>{params.section}</div>
      </div>
      <div className={s.cardTitle}>Список статей</div>
      <CardList cards={cards} />
    </div>
  )
}

export default SubSectionDashboard
