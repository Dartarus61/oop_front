import React, { FC } from 'react'
import MainFrame from '../../components/MainFrame/MainFrame'
import SectionDashboard from '../../components/SectionDashboard/SectionDashboard'

const SectionPage: FC = () => {
  return (
    <MainFrame>
      <SectionDashboard title={'раздел_имя'} />
    </MainFrame>
  )
}

export default SectionPage
