import { FC } from 'react'
import s from './Card.module.css'
import comment from '../../assets/comment.png'
import CardTag from '../CardTag/CardTag'
import { useNavigate } from 'react-router-dom'

export interface ICard {
  id: number
  chapterName: string
  subchapterName: string
  description: string
  createdAt: string
  title: string
  author: string
  comments: number
}

const Card: FC<ICard> = ({
  id,
  chapterName,
  subchapterName,
  description,
  createdAt,
  author,
  comments,
  title,
}) => {
  const navigator = useNavigate()
  return (
    <div onClick={() => navigator(`/article/${id}`)} className={s.card}>
      <div className={s.rectangle}>
        <div className={s.cardHeader}>
          <div className={s.tagContainer}>
            {[chapterName, subchapterName].map((tag, index) => (
              <CardTag index={index} name={tag} key={tag} />
            ))}
          </div>
          <div className={s.date}>
            {createdAt.slice(0, 10).split('-').reverse().join('.')}
          </div>
        </div>
        <div className={s.cardTitle}>{chapterName}</div>
      </div>

      <div className={s.cardBody}>
        <div className={s.bodyTitle}>{title}</div>
        <div className={s.bodyText}>{description}</div>
        <div className={s.bodyFooter}>
          <div className={s.commentCount}>
            <div className={s.count}>{comments}</div>
            <img src={comment} alt='' className={s.commentImg}></img>
          </div>
          <div className={s.user}>Автор: {author}</div>
        </div>
      </div>
    </div>
  )
}

export default Card
