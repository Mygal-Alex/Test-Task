import { Chip } from '@mui/material'
import { useTaskContext } from '../../context/task-context'

const StatusChip = ({ index }: { index: number }) => {
  const { rows } = useTaskContext()

  return (
    <Chip
      color={rows[index].requestSuccess ? 'success' : 'primary'}
      label={rows[index].requestSuccess ? 'done' : 'to do'}
    />
  )
}

export default StatusChip
