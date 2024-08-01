import { useParams } from 'react-router-dom'
import { Box, Typography } from '@mui/material'

const TaskCard: React.FC = () => {
  const { taskId } = useParams<{ taskId: string }>()

  return (
    <Box sx={{ padding: 2 }}>
      <Typography variant='h4'>Task Index: {taskId}</Typography>
    </Box>
  )
}

export default TaskCard
