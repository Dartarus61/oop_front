import AuthLogo from '../AuthLogo/AuthLogo'
import Button from '../AuthButton/AuthButton'
import Input from '../Input/Input'
import s from './RegisterDashboard.module.css'
import AuthTransition from '../AuthTransition/AuthTransition'
import useInput from '../../hooks/useInput'
import { useAction } from '../../hooks/useAction'
import InputPassword from '../InputPassword/InputPassword'
import AgreementModal from '../AgreementModal/AgreementModal'
import { useState, useEffect } from 'react'
import { IInput } from '../../types/types'
import { useNavigate } from 'react-router-dom'
import CustomSnackbarError from '../CustomSnackbarError/CustomSnackbarError'
import { useTypeSelector } from '../../hooks/useTypeSelector'
import SimpleBackdrop from '../SimpleBackdrop/SimpleBackdrop'
import CustomSnackbarSuccess from '../CustomSnackbarSuccess/CustomSnackbarSuccess'

const RegisterDashboard = () => {
  const email = useInput('', { email: true, empty: false })
  const person = useInput('', { empty: false })
  const password = useInput('', { empty: false, minLength: 8 })
  const repeatPassword = useInput('', { empty: false, minLength: 8 })
  const navigator = useNavigate()

  const [modalOpen, setModalOpen] = useState<boolean>(false)
  const [accept, setAccept] = useState<boolean>(false)

  const [passwordError, setPasswordError] = useState<boolean>(false)
  const [personError, setPersonError] = useState<boolean>(false)

  const { register, clearErrorAuth } = useAction()

  const { isLoading, success } = useTypeSelector(state => state.auth)

  const handleRegister = () => {
    const personData = person.data.split(' ')
    if (personData.length === 2) {
      const [surname, name] = personData
      register(email.data, password.data, name, surname)
    }
  }

  useEffect(() => {
    clearErrorAuth()
  }, [])

  const handleModalClose = () => {
    setModalOpen(false)
  }

  const handleAccept = () => {
    setAccept(true)
  }

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

  const getPersonError = () => {
    if (person.isDirty) {
      if (person.errorMessage) {
        return person.errorMessage
      } else {
        if (personError) {
          return 'Неверный формат Ф.И.'
        } else {
          return ''
        }
      }
    } else {
      return ''
    }
  }

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

  useEffect(() => {
    const temp: string[] = person.data.split(' ')
    if (
      (!person.isDirty && temp.length !== 2) ||
      temp[1] === '' ||
      temp[1] === undefined ||
      temp[0] === ''
    ) {
      setPersonError(true)
    } else {
      setPersonError(false)
    }
  }, [person.data, person.isDirty])

  if (isLoading) {
    return <SimpleBackdrop />
  } else {
    return (
      <div className={s.container}>
        <AuthLogo />
        <div className={s.title}>Регистрация</div>
        <div className={s.form}>
          <Input
            label='e-mail: '
            placeholder={'Введите e-mail...'}
            onChange={email.onChange}
            onBlur={email.onBlur}
            value={email.data}
            error={email.isDirty && !email.isValid}
            helperText={email.isDirty ? email.errorMessage : ''}
          />
          <Input
            label='Ф. И. '
            placeholder={'Введите Ф. И....'}
            onChange={person.onChange}
            onBlur={person.onBlur}
            value={person.data}
            error={person.isDirty && (!person.isValid || personError)}
            helperText={getPersonError()}
          />
          <InputPassword
            label='Пароль: '
            placeholder={'Введите пароль...'}
            onChange={password.onChange}
            onBlur={password.onBlur}
            value={password.data}
            error={password.isDirty && (!password.isValid || passwordError)}
            helperText={getErrorPassword(password)}
          />
          <InputPassword
            label='Подтвердите пароль: '
            placeholder={'Подтвердите пароль...'}
            onChange={repeatPassword.onChange}
            onBlur={repeatPassword.onBlur}
            value={repeatPassword.data}
            error={
              repeatPassword.isDirty &&
              (!repeatPassword.isValid || passwordError)
            }
            helperText={getErrorPassword(repeatPassword)}
          />
        </div>
        <div className={s.checkboxContainer}>
          <div className={s.checkbox} onClick={() => setAccept(!accept)}>
            <input
              type='checkbox'
              checked={accept}
              onChange={() => {}}
              className={s.input}
            />
          </div>
          <div style={{ width: '63%' }} className={s.labelContainer}>
            <a
              href='#'
              className={s.inputLabel}
              onClick={e => setModalOpen(true)}
            >
              Я принимаю условия Пользовательского соглашения и даю согласие на
              обработку персональных данных
            </a>
          </div>
        </div>
        <div className={s.toLogin}>
          <AuthTransition
            text='Уже зарегестрированы? '
            onClick={() => navigator('/login')}
            textButton='Войти'
          />
        </div>
        <div className={s.formButton}>
          <Button
            mt='0px'
            disabled={
              !accept ||
              !email.isValid ||
              !person.isValid ||
              !password.isValid ||
              !repeatPassword.isValid ||
              passwordError ||
              personError
            }
            onClick={handleRegister}
            text='Зарегистрироваться '
          />
        </div>
        <AgreementModal
          open={modalOpen}
          handleClose={handleModalClose}
          handleAccept={handleAccept}
        />
        <CustomSnackbarError />
        {success && (
          <CustomSnackbarSuccess text='Вы успешно зарегистрировались. Подтвердите почту чтобы войти в аккаунт' />
        )}
      </div>
    )
  }
}

export default RegisterDashboard
