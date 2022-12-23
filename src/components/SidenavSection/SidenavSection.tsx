import s from './SidenavSection.module.css'
import { useState } from 'react'
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown'
import { Box, Collapse } from '@mui/material'
import { useNavigate, useParams } from 'react-router-dom'

export interface ISection {
    id: number // Добавил чтобы передавать родительский id, который требуется при создании подраздела (chapter/crch метод)
    name: string
    childs: string[]
}

interface ISubSection {
  name: string
  parant: string
}

const Section = ({ name, childs }: ISection) => {
  const [active, setActive] = useState<boolean>(false)

  return (
    <div>
      <div
        onClick={() => setActive(!active)}
        className={`${s.section} ${active && s.active}`}
      >
        <div>{name}</div>
        <KeyboardArrowDownIcon
          className={active ? s.dropIconOpen : s.dropIconClose}
        />
      </div>
      <Box sx={{ display: 'flex', flexDirection: 'column' }}>
        {childs.map(child => (
          <Collapse in={active}>
            <SubSection name={child} parant={name} />
          </Collapse>
        ))}
      </Box>
    </div>
  )
}

const SubSection = ({ name, parant }: ISubSection) => {
  const navigator = useNavigate()
  const params = useParams()

  return (
    <div>
      <div
        onClick={() => navigator(`/section/${parant}/${name}`)}
        className={`${s.subSection} ${
          params?.subsection === name ? s.active : ''
        }`}
      >
        <div>{name}</div>
      </div>
    </div>
  )
}

export default Section
