import { FC } from 'react'
import s from './Article.module.css'

interface IArticle {
  text?: string
  title?: string
}

const Article: FC<IArticle> = ({ text, title }) => {
  function createMarkup() {
    return { __html: text || '<div>Пусто</div>' }
  }

  return (
    <div className={s.article}>
      <div className={s.articleTitle}>{title}</div>
      <div className={s.articleText} dangerouslySetInnerHTML={createMarkup()} />
    </div>
  )
}

export default Article
