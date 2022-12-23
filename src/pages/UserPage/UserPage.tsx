import { FC } from 'react'
import MainFrame from '../../components/MainFrame/MainFrame'
import UserDashboard from '../../components/UserDashboard/UserDashboard'

const UserPage: FC = () => {
  return (
    <MainFrame>
      <UserDashboard />
    </MainFrame>
  )
}

export default UserPage
