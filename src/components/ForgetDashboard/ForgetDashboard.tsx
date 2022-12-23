import s from './ForgetDashboard.module.css'
import AuthLogo from '../AuthLogo/AuthLogo'
import AuthTransition from '../AuthTransition/AuthTransition'
import useInput from '../../hooks/useInput'
import Input from '../Input/Input'
import AuthButton from '../AuthButton/AuthButton'
import { useNavigate } from 'react-router-dom'
import { useAction } from '../../hooks/useAction'
import CustomSnackbarError from '../CustomSnackbarError/CustomSnackbarError'
import { useTypeSelector } from '../../hooks/useTypeSelector'
import SimpleBackdrop from '../SimpleBackdrop/SimpleBackdrop'
import { useEffect } from 'react'

const ForgetDashboard = () => {
  const email = useInput('', { empty: false, email: true })

  const navigator = useNavigate()

  const { isLoading, user } = useTypeSelector(state => state.auth)

  const { forgotPassword } = useAction()

  const handleForgot = () => {
    forgotPassword(email.data)
  }

  useEffect(() => {
    if (user.user.email) navigator('/resetPassword')
  }, [isLoading])

  if (isLoading) {
    return <SimpleBackdrop />
  } else {
    return (
      <div className={s.container}>
        <AuthLogo />
        <div className={s.title}>Сброс пароля</div>
        <div className={s.subTitle}>
          Укажите адрес электронной почты, привязанной к аккаунту:
        </div>
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
        </div>
        <div className={s.formButton}>
          <AuthButton
            text='Сбросить пароль'
            disabled={!email.isValid}
            onClick={handleForgot}
          />
        </div>
        <div className={s.toLogin}>
          <AuthTransition
            onClick={() => navigator('/login')}
            textButton='Вход'
          />
        </div>
        <CustomSnackbarError />
      </div>
    )
  }
}

export default ForgetDashboard
