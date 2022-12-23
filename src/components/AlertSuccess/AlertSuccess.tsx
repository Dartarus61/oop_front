import React, { FC, useState, useEffect } from 'react'
import { Snackbar, Alert } from '@mui/material'
import { useAction } from '../../hooks/useAction'

interface IAlertSuccess {
  text: string
}

const AlertSuccess: FC<IAlertSuccess> = ({ text }) => {
  const { setSuccess } = useAction()

  useEffect(() => {
    return () => {
      setSuccess(false)
    }
  }, [])

  const alertHandleClose = (
    event?: React.SyntheticEvent | Event,
    reason?: string
  ) => {
    setSuccess(false)
  }

  return (
    <Snackbar open autoHideDuration={2000} onClose={alertHandleClose}>
      <Alert severity='success'>{text}</Alert>
    </Snackbar>
  )
}

export default AlertSuccess
