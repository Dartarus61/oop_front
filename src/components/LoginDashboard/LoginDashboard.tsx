import AuthLogo from '../AuthLogo/AuthLogo'
import AuthButton from '../AuthButton/AuthButton'
import CheckedButton from '../CheckedButton/CheckedButton'
import Input from '../Input/Input'
import s from './LoginDashboard.module.css'
import AuthTransition from '../AuthTransition/AuthTransition'
import useInput from '../../hooks/useInput'
import { useAction } from '../../hooks/useAction'
import InputPassword from '../InputPassword/InputPassword'
import ForgretButton from '../ForgretButton/ForgretButton'
import { useNavigate } from 'react-router-dom'
import CustomSnackbarError from '../CustomSnackbarError/CustomSnackbarError'
import { useEffect } from 'react'
import { useTypeSelector } from '../../hooks/useTypeSelector'
import SimpleBackdrop from '../SimpleBackdrop/SimpleBackdrop'

const LoginDashboard = () => {
  const email = useInput('', { empty: false })
  const password = useInput('', { empty: false })

  const { isLoading } = useTypeSelector(state => state.auth)

  const navigate = useNavigate()

  const { clearErrorAuth, login } = useAction()

  const handleLogin = () => {
    login(email.data, password.data)
  }

  useEffect(() => {
    clearErrorAuth()
  }, [])

  if (isLoading) {
    return <SimpleBackdrop />
  } else {
    return (
      <div className={s.container}>
        <AuthLogo />
        <div className={s.title}>Авторизация</div>
        <div className={s.form}>
          <Input
            mb='20px'
            label='Логин (e-mail): '
            value={email.data}
            onBlur={email.onBlur}
            onChange={email.onChange}
            placeholder={'Введите e-mail...'}
            error={email.isDirty && !email.isValid}
            helperText={email.isDirty ? email.errorMessage : ''}
          />
          <InputPassword
            mb='35px'
            label='Пароль: '
            value={password.data}
            onBlur={password.onBlur}
            onChange={password.onChange}
            placeholder={'Введите пароль...'}
            error={password.isDirty && !password.isValid}
            helperText={password.isDirty ? password.errorMessage : ''}
          />
          <div style={{ margin: 'auto' }}>
            <CheckedButton>Запомнить меня</CheckedButton>
          </div>
        </div>
        <div className={s.formButton}>
          <AuthButton
            text='Вход '
            disabled={!password.isValid || !email.isValid}
            onClick={handleLogin}
          />
        </div>
        <div className={s.toLogin}>
          <ForgretButton textButton='Забыли пароль?' />
        </div>
        <div className={s.toLogin}>
          <AuthTransition
            text='Не зарегестрированы? '
            onClick={() => navigate('/register')}
            textButton='Регистрация'
          />
        </div>
        <CustomSnackbarError />
      </div>
    )
  }
}

export default LoginDashboard
