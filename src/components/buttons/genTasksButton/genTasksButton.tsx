import { Button, CircularProgress, Snackbar } from '@mui/material'
import { useState } from 'react'
import { useTaskContext } from '../../../context/task-context'
import { useHTTP } from '../../../hooks/http.hook'
import {
  FormattedTaskRow,
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

const GenTasksButton = ({ index }: { index: number }) => {
  const { rows, updateRequest } = useTaskContext()
  const { loading, request, error, clearError } = useHTTP() as UseHTTPResponse
  const [openSnackbar, setOpenSnackbar] = useState<boolean>(false)
  const [buttonDisabled, setButtonDisabled] = useState<boolean>(false)

  const handleClick = async () => {
    try {
      if (rows.length === 0) return
      const formattedRow = formatRow(rows[index])
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
      updateRequest(index, true)
      setOpenSnackbar(true)
      setButtonDisabled(true)
    } catch (err) {
      console.error('Request Error:', err)
      updateRequest(index, false)
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
    rows[index] &&
    rows[index].taskName.trim() !== '' &&
    rows[index].dimension.trim() !== '' &&
    rows[index].templateID.trim() !== '' &&
    rows[index].images.length > 0 &&
    rows[index].text.length > 0 &&
    rows[index].amount > 0

  return (
    <>
      <Button
        disabled={!areAllFieldsFilled || loading || buttonDisabled}
        onClick={handleClickWrapper}
        sx={styles.buttonStyle}
        variant='contained'
      >
        {loading ? <CircularProgress size={24} /> : 'Generate'}
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
