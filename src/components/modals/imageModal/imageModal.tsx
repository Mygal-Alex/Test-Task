import { useState } from 'react'
import {
  Modal,
  Box,
  Typography,
  TextField,
  Button,
  IconButton
} from '@mui/material'
import CloseIcon from '@mui/icons-material/Close'
import { styles } from './imageModalStyles'
import { useTaskContext } from '../../../context/task-context'
import { ImageModalProps } from '../../../types/imageModal'
import { useCardContext } from '../../../context/card-context'

const ImageModal: React.FC<ImageModalProps> = ({
  open,
  handleClose,
  index
}) => {
  const [newImage, setNewImage] = useState('')
  const { updateImage } = useTaskContext()
  const { addCard } = useCardContext()

  const handleAddImage = () => {
    if (newImage.trim()) {
      updateImage(index, newImage)
      addCard(index, newImage)
      setNewImage('')
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
          Add Image
        </Typography>
        <TextField
          label='Image Name'
          onChange={(e) => setNewImage(e.target.value)}
          size='small'
          sx={styles.textField}
          value={newImage}
          variant='outlined'
        />
        <Button onClick={handleAddImage} sx={styles.button} variant='contained'>
          Add
        </Button>
      </Box>
    </Modal>
  )
}

export default ImageModal
