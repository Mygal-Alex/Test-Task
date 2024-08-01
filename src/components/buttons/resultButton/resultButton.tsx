import { Button } from '@mui/material'
import { useTaskContext } from '../../../context/task-context'
import { styles } from './resultButtonStyles'

const ResultButton = ({ index }: { index: number }) => {
  const { rows } = useTaskContext()

  const handleClick = () => {
    if (rows.length > 0 && rows[index].taskName && rows[index].dimension) {
      const url = `https://testapi-jvqis72guq-lm.a.run.app/test_vidro/${rows[index].taskName}_${rows[index].dimension}/format_validation`
      window.open(url, '_blank')
    } else {
      console.error('rows is undefined or invalid')
    }
  }

  return (
    <Button
      color='success'
      disabled={!rows[index].requestSuccess}
      onClick={handleClick}
      sx={styles.buttonStyle}
      variant='contained'
    >
      {'Folder'}
    </Button>
  )
}

export default ResultButton
