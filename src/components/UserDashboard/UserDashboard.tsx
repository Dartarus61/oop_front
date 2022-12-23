import s from './UserDashboard.module.css'
import { FC, useEffect, useState } from 'react'
import CardList from '../CardList/CardList'
import AccountCircleOutlinedIcon from '@mui/icons-material/AccountCircleOutlined'
import EditIcon from '@mui/icons-material/Edit'
import NewUserInfo from '../NewUserInfo/NewUserInfo'
import SwitchPassword from '../SwitchPassword/SwitchPassword'
import { userApi } from '../../store/apis/userServis'
import SimpleBackdrop from '../SimpleBackdrop/SimpleBackdrop'
import { ClickAwayListener } from '@mui/material'

const UserDashboard: FC = () => {
  const [menuOpen, setMenuOpen] = useState<boolean>(false)
  const [modalData, setModalData] = useState<boolean>(false)
  const [modalSwitch, setModalSwitch] = useState<boolean>(false)

  const {
    data: userProfile,
    isLoading: isProfileLoading,
    refetch,
  } = userApi.useFetchProfileQuery()

  useEffect(() => {
    refetch()
  }, [])

  const handleModalDataClose = () => {
    setModalData(false)
  }

  const handleModalSwitchClose = () => {
    setModalSwitch(false)
  }

  const handleModalDataOpen = () => {
    setModalData(true)
    setMenuOpen(false)
  }

  const handleModalSwitchOpen = () => {
    setModalSwitch(true)
    setMenuOpen(false)
  }

  return (
    <div className={s.container}>
      <div style={{ width: '100%', height: '20px' }}></div>
      <div className={s.userContainer}>
        <div className={s.userPhoto}>
          <AccountCircleOutlinedIcon className={s.img} />
        </div>
        <div className={s.user}>
          <div className={s.userInfo}>
            <div className={s.userName}>
              {userProfile?.name + ' ' + userProfile?.surname}
              <ClickAwayListener onClickAway={() => setMenuOpen(false)}>
                <div style={{ position: 'relative' }}>
                  <EditIcon
                    onClick={() => setMenuOpen(!menuOpen)}
                    sx={{ ml: '10px', textAlign: 'center' }}
                  />
                  <div className={`${s.menu} ${!menuOpen && s.menuClose}`}>
                    <div
                      className={s.menuItem}
                      onClick={() => handleModalDataOpen()}
                    >
                      Изменить данные
                    </div>
                    <div
                      className={s.menuItem}
                      onClick={() => handleModalSwitchOpen()}
                    >
                      Изменить пароль
                    </div>
                  </div>
                </div>
              </ClickAwayListener>
            </div>
            <div className={s.userRole}>{userProfile?.roles.join(' ')}</div>

            <div className={s.article}>
              <div className={s.articleText}>Статей опубликовано:</div>

              <div className={s.articleCount}>{userProfile?.postCount}</div>
            </div>

            <div className={s.comment}>
              <div className={s.commentText}>Коменнтариев оставлено:</div>

              <div className={s.commentCount}>{userProfile?.commentCount}</div>
            </div>
          </div>
          <div className={s.articleTitle}>Статьи пользователя:</div>
        </div>
      </div>
      <CardList cards={userProfile?.posts} />
      <NewUserInfo open={modalData} onClose={handleModalDataClose} />
      <SwitchPassword open={modalSwitch} onClose={handleModalSwitchClose} />
      {isProfileLoading && <SimpleBackdrop />}
    </div>
  )
}

export default UserDashboard
