import { Button } from '@mui/material'
import { useTaskContext } from '../../../context/task-context'
import { TaskContextType } from '../../../types/genTasks'
import { styles } from './resultButtonStyles'

const ResultButton = () => {
  const { rows, requestSuccess } = useTaskContext() as TaskContextType

  const handleClick = () => {
    if (rows.length > 0 && rows[0].taskName && rows[0].dimension) {
      const url = `https://testapi-jvqis72guq-lm.a.run.app/test_vidro/${rows[0].taskName}_${rows[0].dimension}/format_validation`
      window.open(url, '_blank')
    } else {
      console.error('rows or rows[0] is undefined or invalid')
    }
  }

  return (
    <Button
      color='success'
      disabled={!requestSuccess}
      onClick={handleClick}
      sx={styles.buttonStyle}
      variant='contained'
    >
      {'result'}
    </Button>
  )
}

export default ResultButton
