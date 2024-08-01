import { Chip } from '@mui/material'
import { useTaskContext } from '../../context/task-context'

const StatusChip = () => {
  const { requestSuccess } = useTaskContext()

  return (
    <Chip
      color={requestSuccess ? 'success' : 'primary'}
      label={requestSuccess ? 'done' : 'to do'}
    />
  )
}

export default StatusChip
