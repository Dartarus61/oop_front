import s from './NavbarSection.module.css'

interface SectionProps {
  title: string
}

const NavbarSection = ({ title }: SectionProps) => {
  return (
    <li className={s.section}>
      <div className={s.sectionText}>{title}</div>
    </li>
  )
}

export default NavbarSection
