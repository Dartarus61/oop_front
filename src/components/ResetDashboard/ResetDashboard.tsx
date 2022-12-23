import useInput from '../../hooks/useInput'
import Input from '../Input/Input'
import AuthLogo from '../AuthLogo/AuthLogo'
import AuthTransition from '../AuthTransition/AuthTransition'
import InputPassword from '../InputPassword/InputPassword'
import s from './ResetDashboard.module.css'
import AuthButton from '../AuthButton/AuthButton'
import { useAction } from '../../hooks/useAction'
import { useEffect, useState } from 'react'
import { IInput } from '../../types/types'
import { useNavigate } from 'react-router-dom'
import CustomSnackbarError from '../CustomSnackbarError/CustomSnackbarError'
import { useTypeSelector } from '../../hooks/useTypeSelector'
import SimpleBackdrop from '../SimpleBackdrop/SimpleBackdrop'

const ResetDashboard = () => {
  const code = useInput('', { empty: false })
  const password = useInput('', { empty: false, minLength: 8 })
  const repeatPassword = useInput('', { empty: false, minLength: 8 })
  const [passwordError, setPasswordError] = useState<boolean>(false)
  const navigator = useNavigate()

  const { newPassword, clearUser } = useAction()
  const { isLoading } = useTypeSelector(state => state.auth)

  const handleNewPass = () => {
    newPassword(code.data, password.data)
  }

  useEffect(() => {
    clearUser()
  }, [])

  useEffect(() => {
    if (
      password.isDirty &&
      repeatPassword.isDirty &&
      repeatPassword.data !== password.data
    ) {
      setPasswordError(true)
    } else {
      setPasswordError(false)
    }
  }, [
    password.data,
    repeatPassword.data,
    password.isDirty,
    repeatPassword.isDirty,
  ])

  const getErrorPassword = (value: IInput) => {
    if (repeatPassword.isDirty && password.isDirty) {
      if (value.errorMessage) {
        return value.errorMessage
      } else {
        if (passwordError) {
          return 'Пароли не совпадают'
        } else {
          return ''
        }
      }
    } else {
      return ''
    }
  }

  if (isLoading) {
    return <SimpleBackdrop />
  } else {
    return (
      <div className={s.container}>
        <AuthLogo />
        <div className={s.title}>Сброс пароля</div>
        <div className={s.subTitle}>Введите подтверждающий код:</div>
        <div className={s.form}>
          <Input
            mb='20px'
            label='Код: '
            value={code.data}
            onBlur={code.onBlur}
            onChange={code.onChange}
            placeholder={'Введите код...'}
            error={code.isDirty && !code.isValid}
            helperText={code.isDirty ? code.errorMessage : ''}
          />
          <InputPassword
            mb='20px'
            label='Новый пароль:  '
            value={password.data}
            onBlur={password.onBlur}
            onChange={password.onChange}
            placeholder={'Введите пароль...'}
            error={password.isDirty && (!password.isValid || passwordError)}
            helperText={getErrorPassword(password)}
          />
          <InputPassword
            mb='20px'
            label='Подтвердите пароль:  '
            value={repeatPassword.data}
            onBlur={repeatPassword.onBlur}
            onChange={repeatPassword.onChange}
            placeholder={'Подтвердите пароль...'}
            error={
              repeatPassword.isDirty &&
              (!repeatPassword.isValid || passwordError)
            }
            helperText={getErrorPassword(repeatPassword)}
          />
        </div>
        <div className={s.formButton}>
          <AuthButton
            text='Изменить пароль'
            disabled={
              !code.isValid ||
              !password.isValid ||
              !repeatPassword.isValid ||
              passwordError
            }
            onClick={handleNewPass}
          />
        </div>
        <div className={s.formButton}></div>
        <div className={s.toLogin}>
          <AuthTransition
            text='Вспомнили пароль? '
            onClick={() => navigator('/login')}
            textButton='Вход'
          />
        </div>
        <CustomSnackbarError />
      </div>
    )
  }
}

export default ResetDashboard
