import { FC } from 'react'
import MainDashboard from '../../components/MainDashboard/MainDashboard'
import MainFrame from '../../components/MainFrame/MainFrame'

const MainPage: FC = () => {
  return (
    <MainFrame>
      <MainDashboard />
    </MainFrame>
  )
}

export default MainPage
