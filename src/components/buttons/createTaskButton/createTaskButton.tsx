import { useState } from 'react'
import { Button } from '@mui/material'
import TasksModal from '../../modals/tasksModal/tasksModals'

const CreateTaskButton: React.FC = () => {
  const [modalOpen, setModalOpen] = useState(false)

  const handleOpenModal = () => {
    setModalOpen(true)
  }

  const handleCloseModal = () => {
    setModalOpen(false)
  }

  return (
    <>
      <Button onClick={handleOpenModal} variant='contained'>
        Create Task
      </Button>
      <TasksModal handleClose={handleCloseModal} open={modalOpen} />
    </>
  )
}

export default CreateTaskButton
