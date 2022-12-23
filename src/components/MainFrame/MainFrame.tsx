import Header from '../Header/Header'
import Sidenav from '../Sidenav/Sidenav'
import Footer from '../Footer/Footer'
import s from './MainFrame.module.css'
import React, { FC } from 'react'
import Section from '../SidenavSection/SidenavSection'
import { chapterApi } from '../../store/apis/chapterService'
import SimpleBackdrop from '../SimpleBackdrop/SimpleBackdrop'

interface IMainFrame {
  children?: React.ReactNode
}

const MainFrame: FC<IMainFrame> = ({ children }) => {
  const { data: sections, isLoading, refetch } = chapterApi.useGetMenuQuery()

  return (
    <div>
      <Header />
      <Sidenav side='left'>
        {sections?.map(section => (
          <Section
            name={section.name}
            childs={section.childs}
            id={section.id} // ругался, пришлось добавить
            key={section.name}
          />
        ))}
      </Sidenav>
      <div className={s.main}>{children}</div>
      <Sidenav side='right' />
      <Footer />
      {isLoading && <SimpleBackdrop />}
    </div>
  )
}

export default MainFrame
