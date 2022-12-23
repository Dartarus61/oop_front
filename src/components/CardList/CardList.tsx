import s from './CardList.module.css'
import Card, { ICard } from '../../components/Card/Card'
import { FC } from 'react'

interface ICardList {
  cards: ICard[] | undefined
}

const CardList: FC<ICardList> = ({ cards }) => {
  return (
    <div className={s.cards}>
      {cards?.map(card => (
        <Card {...card} key={card.title} />
      ))}
    </div>
  )
}

export default CardList
