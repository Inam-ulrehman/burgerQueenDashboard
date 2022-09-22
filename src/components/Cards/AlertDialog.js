import * as React from 'react'
import Button from '@mui/material/Button'
import Dialog from '@mui/material/Dialog'
import DialogActions from '@mui/material/DialogActions'
import DialogContent from '@mui/material/DialogContent'
import DialogContentText from '@mui/material/DialogContentText'
import DialogTitle from '@mui/material/DialogTitle'
import { useDispatch } from 'react-redux'

// ================Looking for these values===========
// <AlertDialog
//   content={'Do you really want to empty your cart ?'}
//   title={'Alert'}
//   buttonText={'Remove'}
//   action={action}
// />
// =========================
export default function AlertDialog({ content, title, buttonText, action }) {
  const [open, setOpen] = React.useState(false)
  const dispatch = useDispatch()

  const handleClickOpen = () => {
    setOpen(true)
  }

  const handleClose = () => {
    setOpen(false)
  }
  const handleAgree = () => {
    dispatch(action)
    setOpen(false)
  }
  return (
    <div>
      <Button variant='outlined' onClick={handleClickOpen}>
        {buttonText ? buttonText : 'Button text'}
      </Button>
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby='alert-dialog-title'
        aria-describedby='alert-dialog-description'
      >
        <DialogTitle id='alert-dialog-title'>
          {title ? title : 'Title is empty'}
        </DialogTitle>
        <DialogContent>
          <DialogContentText id='alert-dialog-description'>
            {content ? content : 'Content is empty'}
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Disagree</Button>
          <Button onClick={handleAgree} autoFocus>
            Agree
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  )
}
