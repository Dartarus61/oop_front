import s from './Header.module.css'
import NavbarSection from '../NavbarSection/NavbarSection'
import { useNavigate, useParams } from 'react-router-dom'
import CircleNotificationsOutlinedIcon from '@mui/icons-material/CircleNotificationsOutlined'
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline'
import AccountCircleOutlinedIcon from '@mui/icons-material/AccountCircleOutlined'
import { FC, useState } from 'react'
import { useAction } from '../../hooks/useAction'
import LogoutIcon from '@mui/icons-material/Logout'
import { ClickAwayListener } from '@mui/material'
import { userApi } from '../../store/apis/userServis'

const Header: FC = () => {
  const navigator = useNavigate()
  const [menuOpen, setMenuOpen] = useState<boolean>(false)
  const { logout } = useAction()

  const params = useParams()

  const {
    data: userProfile,
    isLoading: isProfileLoading,
    refetch,
  } = userApi.useFetchProfileQuery()

  return (
    <header className={s.headerContaiener}>
      <div className={s.labelBox}>
        <div className={s.mainLabel} onClick={() => navigator('/main')}>
          <h1 className={s.labelTitle}>I.Z.G.I.P.</h1>
          <h4 className={s.labelSubTitle}>сайт-методичка</h4>
        </div>
      </div>

      <nav className={s.navContainer}>
        <div className={s.nav}>
          <div>
            <CircleNotificationsOutlinedIcon className={s.icon} />
          </div>
          {userProfile?.roles.some(
            role => role.toString() === 'ADMIN' || role.toString() === 'CREATOR'
          ) ? (
            <div>
              <AddCircleOutlineIcon
                onClick={() => navigator('/createArticle')}
                className={s.icon}
              />
            </div>
          ) : (
            ''
          )}

          <ClickAwayListener onClickAway={() => setMenuOpen(false)}>
            <div className={s.profileMenu}>
              <AccountCircleOutlinedIcon
                onClick={() =>
                  localStorage.getItem('token')
                    ? setMenuOpen(!menuOpen)
                    : navigator('/login')
                }
                className={s.icon}
                sx={{ mr: '18px' }}
              />

              <div className={`${s.menu} ${!menuOpen && s.menuClose}`}>
                {userProfile?.roles.some(
                  role => role.toString() === 'ADMIN'
                ) ? (
                  <div
                    className={s.menuItem}
                    onClick={() => navigator('/admin')}
                  >
                    Админ панель
                  </div>
                ) : (
                  ''
                )}
                <div
                  className={s.menuItem}
                  onClick={() => navigator('/myProfile')}
                >
                  Профиль
                </div>
                <div className={s.menuItem} onClick={() => logout()}>
                  <div className={s.menuItemText}>Выход</div>
                  <div>
                    <LogoutIcon />
                  </div>
                </div>
              </div>
            </div>
          </ClickAwayListener>
        </div>
      </nav>

      <ul className={s.sectionButton}>
        {params?.section && <NavbarSection key='1' title={params?.section} />}
        {params?.subsection && (
          <NavbarSection key='1' title={params?.subsection} />
        )}
      </ul>
    </header>
  )
}

export default Header
