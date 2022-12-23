import { FC } from 'react'
import s from './Comment.module.css'
import { IComment } from '../CommentList/CommentList'
import AccountCircleOutlinedIcon from '@mui/icons-material/AccountCircleOutlined'

const Comment: FC<IComment> = ({ name, createdAt, text }) => {
  return (
    <div className={s.container}>
      <div className={s.user}>
        <AccountCircleOutlinedIcon sx={{ width: '60px', height: '60px' }} />
        <div className={s.userInfo}>
          <div className={s.userName}>{name}</div>
        </div>
      </div>
      <div className={s.comment}>
        <div className={s.commentText}>{text}</div>
        <div className={s.date}>
          {createdAt.slice(0, 10).split('-').reverse().join('.')}
        </div>
      </div>
    </div>
  )
}

export default Comment
