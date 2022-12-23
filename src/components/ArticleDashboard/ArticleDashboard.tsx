import { FC } from 'react'
import { useParams } from 'react-router-dom'
import Comment from '../../components/Comment/Comment'
import { articleApi } from '../../store/apis/articleService'
import { commentApi } from '../../store/apis/commentService'
import Article from '../Article/Article'
import CommentList from '../CommentList/CommentList'
import s from './ArticleDashboard.module.css'

export interface IArticleData {
  title: string
  data: string
}

const ArticleDashboard: FC = () => {
  const params = useParams()
  const { data: text } = articleApi.useGetArticleByIdQuery(Number(params?.id))
  const { data: comments } = commentApi.useGetCommentByIdQuery(
    Number(params?.id)
  )

  return (
    <div className={s.container}>
      <Article title={text?.title} text={text?.data} />
      <CommentList postId={Number(params?.id)} comments={comments || []} />
    </div>
  )
}

export default ArticleDashboard
