import React, { FC, useState, useEffect } from 'react'
import { Snackbar, Alert } from '@mui/material'

interface IAlertError {
  error: any
}

const AlertError: FC<IAlertError> = ({ error }) => {
  const [open, setOpen] = useState(false)

  useEffect(() => {
    error && setOpen(true)

    return () => {
      setOpen(false)
    }
  }, [error])

  const alertHandleClose = (
    event?: React.SyntheticEvent | Event,
    reason?: string
  ) => {
    setOpen(false)
  }

  return (
    <Snackbar open={open} autoHideDuration={2000} onClose={alertHandleClose}>
      <Alert severity='error'>{error.data.message}</Alert>
    </Snackbar>
  )
}

export default AlertError
