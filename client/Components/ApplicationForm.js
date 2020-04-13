import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import { Button, Text, LockIcon, TwoInputFieldGrid, GridInputField } from './CommonlyUsed'

import Modal from '@material-ui/core/Modal'
import MaterialInport from '../materialUI'
const MaterialUI = MaterialInport()

function getModalStyle () {
  const top = 50
  const left = 50

  return {
    top: `${top}%`,
    left: `${left}%`,
    transform: `translate(-${top}%, -${left}%)`
  }
}

const useStyles = makeStyles((theme) => ({
  paper: {
    position: 'absolute',
    width: 400,
    backgroundColor: theme.palette.background.paper,
    border: '2px solid #000',
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3)
  },
  submit: {
    margin: theme.spacing(3, 0, 2)
  },
}))

const ApplicationForm = (prop) => {
  const classes = useStyles()

  const [modalStyle] = React.useState(getModalStyle)
  const [open, setOpen] = React.useState(false)

  const handleOpen = () => {
    setOpen(true)
  }

  const handleClose = () => {
    setOpen(false)
  }

  const body = (
    <div style={modalStyle} className={classes.paper}>
      <form noValidate onSubmit={prop.handleSubmit}>
      <Text sizeType='h5' message='APPLICATION' />
        <MaterialUI.Grid container spacing={2}>
          <GridInputField
            id='FirstName'
            label='FirstName'
            name='FirstName'
            autoComplete='FirstName'
            handleChange={prop.handleChange('FirstName')}
          />
          <GridInputField
            id='MiddleName'
            label='MiddleName'
            name='MiddleName'
            autoComplete='MiddleName'
            handleChange={prop.handleChange('MiddleName')}
          />
          <GridInputField
            id='LastName'
            label='LastName'
            name='LastName'
            autoComplete='LastName'
            handleChange={prop.handleChange('LastName')}
          />
          <GridInputField
            id='Email'
            label='Email Address'
            name='email'
            autoComplete='email'
            type ='email'
            handleChange={prop.handleChange('Email')}
          />
          <GridInputField
            id='PhoneNumber'
            label='Phone Number'
            name='phoneNumber'
            autoComplete='phoneNumber'
            type ='number'
            handleChange={prop.handleChange('PhoneNumber')}
          />
          <GridInputField
            id='State'
            label='Enter State'
            name='state'
            autoComplete='state'
            handleChange={prop.handleChange('State')}
          />
          <GridInputField
            id='PreferedJob'
            label='Prefered Job'
            name='PreferedJob'
            autoComplete='PreferedJob'
            handleChange={prop.handleChange('PreferedJob')}
          />
          <GridInputField
            id='Resume'
            label='Resume'
            name='Resume'
            autoComplete='Resume'
            type ='file'
            handleChange={prop.handleChange('Resume')}
          />
          <GridInputField
            id='Avaliablity'
            name='avaliablity'
            autoComplete='avaliablity'
            type ='date'
            handleChange={prop.handleChange('Avaliablity')}
          />
        </MaterialUI.Grid>
        <Button name='Submit' styles={classes.submit} />
      </form>
    </div>
  )

  return (
    <div>
      <Modal
        open={prop.isOpen}
        onClose={prop.handleClose}
        aria-labelledby='simple-modal-title'
        aria-describedby='simple-modal-description'
      >
        {body}
      </Modal>
    </div>
  )
}

export default ApplicationForm
