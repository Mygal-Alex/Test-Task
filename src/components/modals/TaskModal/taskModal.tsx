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
import { styles } from './taskModalStyles'
import { useTaskContext } from '../../../context/task-context'

interface TaskModalProps {
  open: boolean
  handleClose: () => void
}

const TaskModal: React.FC<TaskModalProps> = ({ open, handleClose }) => {
  const [taskName, setTaskName] = useState('')
  const [amount, setAmount] = useState('')
  const { setRows } = useTaskContext()

  const handleAddTask = () => {
    if (taskName.trim() && amount.trim()) {
      setRows((prevRows) => [
        ...prevRows,
        {
          taskName,
          dimension: '1x1',
          templateID: 'mwpswxcudtwxd',
          images: [],
          text: [],
          amount: Number(amount),
          genType: 'cyclic_generation',
          requestSuccess: false
        }
      ])
      setTaskName('')
      setAmount('')
      handleClose()
    }
  }

  return (
    <Modal
      onClose={handleClose}
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
          Create Task
        </Typography>
        <TextField
          label='Task Name'
          onChange={(e) => setTaskName(e.target.value)}
          size='small'
          sx={styles.textField}
          value={taskName}
          variant='outlined'
        />
        <TextField
          inputProps={{ min: 0 }}
          label='Amount'
          onChange={(e) => setAmount(e.target.value)}
          size='small'
          sx={styles.textField}
          type='number'
          value={amount}
          variant='outlined'
        />
        <Button onClick={handleAddTask} sx={styles.button} variant='contained'>
          Add Task
        </Button>
      </Box>
    </Modal>
  )
}

export default TaskModal
