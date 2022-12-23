import { FC } from 'react'
import s from './CardTag.module.css'

interface ICardTag {
  index: number
  name: string
}

const CardTag: FC<ICardTag> = ({ index, name }) => {
  return (
    <div className={`${s.tag} ${index % 2 ? s.tagOrange : s.tagGreen}`}>
      {name}
    </div>
  )
}

export default CardTag
