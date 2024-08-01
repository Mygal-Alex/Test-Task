import React, { useState } from 'react'
import {
  Modal,
  Box,
  Typography,
  TextField,
  Button,
  IconButton
} from '@mui/material'
import CloseIcon from '@mui/icons-material/Close'
import { styles } from './textModalStyles'
import { useTaskContext } from '../../../context/task-context'
import { TextModalProps } from '../../../types/textModal'

const TextModal: React.FC<TextModalProps> = ({ open, handleClose, index }) => {
  const [newText, setNewText] = useState('')
  const { updateText } = useTaskContext()

  const handleAddText = () => {
    if (newText.trim()) {
      updateText(index, newText)
      setNewText('')
      handleClose()
    }
  }

  return (
    <Modal
      aria-describedby='modal-description'
      aria-labelledby='modal-title'
      onClose={() => {}}
      open={open}
      sx={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center'
      }}
    >
      <Box sx={styles.modal}>
        <IconButton onClick={handleClose} sx={styles.closeButton}>
          <CloseIcon />
        </IconButton>
        <Typography
          component='h2'
          id='modal-title'
          sx={styles.title}
          variant='h6'
        >
          Add Text
        </Typography>
        <TextField
          label='Text Name'
          onChange={(e) => setNewText(e.target.value)}
          size='small'
          sx={styles.textField}
          value={newText}
          variant='outlined'
        />
        <Button onClick={handleAddText} sx={styles.button} variant='contained'>
          Add
        </Button>
      </Box>
    </Modal>
  )
}

export default TextModal
