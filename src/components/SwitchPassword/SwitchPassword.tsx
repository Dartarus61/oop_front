import { FC } from 'react'
import Box from '@mui/material/Box'
import Modal from '@mui/material/Modal'
import s from './SwitchPassword.module.css'
import AgreementModalButton from '../AgreementModal/AgreementModalButton'
import InputPassword from '../InputPassword/InputPassword'
import useInput from '../../hooks/useInput'
import { useAction } from '../../hooks/useAction'
import { useTypeSelector } from '../../hooks/useTypeSelector'
import AlertSuccess from '../AlertSuccess/AlertSuccess'
import CustomSnackbarError from '../CustomSnackbarError/CustomSnackbarError'

const style = {
  position: 'absolute' as 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  bgcolor: '#C4D1DD',
  boxShadow: 24,
  p: 4,
  outline: 0,
  borderRadius: '17px',
  height: 'auto',
}

interface ISwitchPassword {
  open: boolean
  onClose: () => void
}

const SwitchPassword: FC<ISwitchPassword> = ({ open, onClose }) => {
  const password = useInput('', { empty: false })
  const newPassword = useInput('', { empty: false, minLength: 8 })

  const { switchPassword } = useAction()
  const { user, success, error } = useTypeSelector(state => state.auth)

  const handleSwitch = () => {
    switchPassword(user.user.id, password.data, newPassword.data)
  }

  return (
    <div>
      <Modal
        open={open}
        onClose={onClose}
        aria-labelledby='modal-modal-title'
        aria-describedby='modal-modal-description'
      >
        <Box sx={style}>
          <div className={s.title}>Смена пароля</div>
          <div className={s.form}>
            <InputPassword
              error={password.isDirty && !password.isValid}
              helperText={password.isDirty ? password.errorMessage : ''}
              value={password.data}
              onBlur={password.onBlur}
              onChange={password.onChange}
              label='Пароль: '
              placeholder='Введите старый пароль'
            />
            <InputPassword
              error={newPassword.isDirty && !newPassword.isValid}
              helperText={newPassword.isDirty ? newPassword.errorMessage : ''}
              value={newPassword.data}
              onBlur={newPassword.onBlur}
              onChange={newPassword.onChange}
              label='Новый пароль: '
              placeholder='Введите новый пароль'
            />
          </div>
          <div className={s.buttonContainer}>
            <AgreementModalButton
              disabled={!password.isValid || !newPassword.isValid}
              text='Подтвердить'
              onClick={handleSwitch}
            />
            <AgreementModalButton text='Отмена' onClick={onClose} />
          </div>
        </Box>
      </Modal>
      {success && <AlertSuccess text='Пароль изменен успешно' />}
      <CustomSnackbarError />
    </div>
  )
}

export default SwitchPassword
