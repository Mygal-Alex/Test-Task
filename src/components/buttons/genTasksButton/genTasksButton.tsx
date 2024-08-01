import { Button, CircularProgress, Snackbar } from '@mui/material'
import { useState } from 'react'
import { useTaskContext } from '../../../context/task-context'
import { useHTTP } from '../../../hooks/http.hook'
import {
  FormattedTaskRow,
  TaskContextType,
  TaskRow,
  UseHTTPResponse
} from '../../../types/genTasks'
import { styles } from './genTasksButtonStyles'

const formatRow = (row: TaskRow): FormattedTaskRow => ({
  task_name: row.taskName,
  dimension: row.dimension,
  template_id: row.templateID,
  amount: row.amount,
  gen_type: row.genType,
  image_layers: row.images,
  text_layers: row.text
})

const GenTasksButton: React.FC = () => {
  const { rows, setRequestSuccess } = useTaskContext() as TaskContextType
  const { loading, request, error, clearError } = useHTTP() as UseHTTPResponse
  const [openSnackbar, setOpenSnackbar] = useState<boolean>(false)
  const [buttonDisabled, setButtonDisabled] = useState<boolean>(false)

  const handleClick = async () => {
    try {
      if (rows.length === 0) return

      const formattedRow = formatRow(rows[0])
      console.log('Formatted Row:', formattedRow)

      const headers: Record<string, string> = {
        Authorization: `${import.meta.env.VITE_API_AUTHORIZATION}`,
        'Content-Type': 'application/json'
      }

      const response = await request(
        '/api/tz-front/generate_formats',
        'POST',
        formattedRow,
        headers
      )
      console.log('Response:', response)

      setRequestSuccess(true)
      setOpenSnackbar(true)
      setButtonDisabled(true)
    } catch (err) {
      console.error('Request Error:', err)
      setRequestSuccess(false)
    } finally {
      clearError()
    }
  }

  const handleClickWrapper = () => {
    handleClick().catch((err) => {
      console.error('Unhandled error:', err)
    })
  }

  const areAllFieldsFilled =
    rows.length > 0 &&
    rows[0] &&
    rows[0].taskName.trim() !== '' &&
    rows[0].dimension.trim() !== '' &&
    rows[0].templateID.trim() !== '' &&
    rows[0].images.length > 0 &&
    rows[0].text.length > 0 &&
    rows[0].amount > 0

  return (
    <>
      <Button
        disabled={!areAllFieldsFilled || loading || buttonDisabled}
        onClick={handleClickWrapper}
        sx={styles.buttonStyle}
        variant='contained'
      >
        {loading ? <CircularProgress size={24} /> : 'genTasks'}
      </Button>
      <Snackbar
        autoHideDuration={6000}
        message='Request successful'
        onClose={() => setOpenSnackbar(false)}
        open={openSnackbar}
      />
      {error && (
        <Snackbar
          autoHideDuration={6000}
          message={error}
          onClose={() => clearError()}
          open={!!error}
        />
      )}
    </>
  )
}

export default GenTasksButton
