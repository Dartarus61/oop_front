import { FC } from 'react'
import ArticleDashboard from '../../components/ArticleDashboard/ArticleDashboard'
import MainFrame from '../../components/MainFrame/MainFrame'

const ArticlePage: FC = () => {
  return (
    <MainFrame>
      <ArticleDashboard />
    </MainFrame>
  )
}

export default ArticlePage
