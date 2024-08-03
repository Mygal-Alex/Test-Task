import { useState } from 'react'
import { Button } from '@mui/material'
import TaskModal from '../../modals/taskModal/taskModal'

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
      <TaskModal handleClose={handleCloseModal} open={modalOpen} />
    </>
  )
}

export default CreateTaskButton
