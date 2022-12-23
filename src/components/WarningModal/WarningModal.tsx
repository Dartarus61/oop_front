import { FC } from 'react'
import Box from '@mui/material/Box'
import Modal from '@mui/material/Modal'
import s from './WarningModal.module.css'
import AgreementModalButton from '../AgreementModal/AgreementModalButton'

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
  width: '32%',
  height: 'auto',
}

interface IWarningModal {
  open: boolean
  onClose: () => void
  onSuccess: () => void
}

const WarningModal: FC<IWarningModal> = ({ open, onClose, onSuccess }) => {
  return (
    <div>
      <Modal
        open={open}
        onClose={onClose}
        aria-labelledby='modal-modal-title'
        aria-describedby='modal-modal-description'
      >
        <Box sx={style}>
          <div className={s.title}>Предупреждение</div>
          <div className={s.text}>
            После публикации редактирование статьи будет невозможно. Вы уверены,
            что хотите продолжить?
          </div>
          <div className={s.buttonContainer}>
            <AgreementModalButton text='Опубликовать' onClick={onSuccess} />
            <AgreementModalButton text='Отмена' onClick={onClose} />
          </div>
        </Box>
      </Modal>
    </div>
  )
}

export default WarningModal
