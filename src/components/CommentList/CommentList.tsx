import { FC, useState } from 'react'
import { useTypeSelector } from '../../hooks/useTypeSelector'
import { commentApi } from '../../store/apis/commentService'

import Comment from '../Comment/Comment'
import s from './CommentList.module.css'

interface ICommentListProps {
  comments: IComment[]
  postId: number
}

export interface IUserComment {
  postId: number
  userId: number
  ctx: string
}

export interface IComment {
  name: string
  createdAt: string
  text: string
}

const CommentList: FC<ICommentListProps> = ({ postId, comments }) => {
  const [text, setText] = useState<string>('')

  const { user } = useTypeSelector(state => state.auth)

  const [createComment, { isLoading, isSuccess, isError, error }] =
    commentApi.useCreateCommentMutation()

  const handleCreateComment = () => {
    createComment({ postId, userId: user.user.id, ctx: text })
    setText('')
  }

  return (
    <div className={s.commetList}>
      <div className={s.commetTitle}>Комментарии</div>
      <div className={s.commentContainer}>
        {comments?.map((comment, index) => (
          <Comment
            text={comment.text}
            name={comment.name}
            createdAt={comment.createdAt}
            key={index}
          />
        ))}
      </div>

      <div className={s.sendComment}>
        <div className={s.inputContainer}>
          <textarea
            onChange={e => setText(e.target.value)}
            value={text}
            className={s.input}
            maxLength={255}
            placeholder='Напишите комментарий(max: 255)'
          />
          <div className={s.buttonContainer}>
            <button
              onClick={() => handleCreateComment()}
              disabled={text === ''}
              className={s.button}
            >
              Опубликовать
            </button>
          </div>
        </div>
      </div>

      <div className={s.margin}></div>
    </div>
  )
}

export default CommentList
