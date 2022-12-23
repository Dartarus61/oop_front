import { FC, useState } from 'react'
import Box from '@mui/material/Box'
import s from './NewUserInfo.module.css'
import Modal from '@mui/material/Modal'
import useInput from '../../hooks/useInput'
import Input from '../Input/Input'
import AgreementModalButton from '../AgreementModal/AgreementModalButton'
import { userApi } from '../../store/apis/userServis'
import { useTypeSelector } from '../../hooks/useTypeSelector'
import SimpleBackdrop from '../SimpleBackdrop/SimpleBackdrop'
import CustomSnackbarSuccess from '../CustomSnackbarSuccess/CustomSnackbarSuccess'
import AlertError from '../AlertError/AlertError'

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

interface INewUserInfo {
  open: boolean
  onClose: () => void
}

const NewUserInfo: FC<INewUserInfo> = ({ open, onClose }) => {
  const [updateProfile, { isError, isSuccess, error }] =
    userApi.useUpdateProfileMutation()
  const { user } = useTypeSelector(state => state.auth)
  const { data: userData, isLoading } = userApi.useFetchProfileQuery()

  const name = useInput('', {})
  const surname = useInput('', {})

  const handleUpdate = async () => {
    await updateProfile({
      id: user.user.id,
      name: name.data || userData!.name,
      surname: surname.data || userData!.surname,
    })
  }

  console.log(error)

  if (isLoading) {
    return <SimpleBackdrop />
  } else {
    return (
      <div>
        <Modal
          open={open}
          onClose={onClose}
          aria-labelledby='modal-modal-title'
          aria-describedby='modal-modal-description'
        >
          <Box sx={style}>
            <div className={s.title}>Изменение данных</div>
            <div className={s.form}>
              <Input
                value={name.data}
                onChange={name.onChange}
                label='Имя'
                placeholder={userData?.name || ''}
              />
              <Input
                value={surname.data}
                onChange={surname.onChange}
                label='Фамилия'
                placeholder={userData?.surname || ''}
              />
            </div>
            <div className={s.buttonContainer}>
              <AgreementModalButton text='Подтвердить' onClick={handleUpdate} />
              <AgreementModalButton text='Отмена' onClick={onClose} />
            </div>
          </Box>
        </Modal>
        {isSuccess && <CustomSnackbarSuccess text='Данные успешно изменены' />}
      </div>
    )
  }
}

export default NewUserInfo
