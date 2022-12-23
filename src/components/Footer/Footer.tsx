import s from './Footer.module.css'

const Footer = () => {
  return (
    <footer className={s.footer}>
      <div className={s.footerText}>Some footer text</div>
      <div className={s.footerText}>
        Link | mail@gmail.com | +8 (555) 555-55-55
      </div>
      <div className={s.footerText}>Copyright ...</div>
    </footer>
  )
}

export default Footer
