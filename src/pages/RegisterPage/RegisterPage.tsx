import { FC } from 'react'
import RegisterDashboard from '../../components/RegisterDashboard/RegisterDashboard'
import MainFrame from '../../components/MainFrame/MainFrame'

const RegisterPage: FC = () => {
  return (
    <MainFrame>
      <RegisterDashboard />
    </MainFrame>
  )
}

export default RegisterPage
