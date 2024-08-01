import React, { useState } from 'react'
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  Chip,
  TextField
} from '@mui/material'
import { styles } from './tasksTableStyles'
import DimensionDropdown from '../dropdowns/dimensionDropdown/dimensionDropdown'
import TemplateIdDropdown from '../dropdowns/templateIdDropdown/templateIdDropdown'
import GenTypeDropdown from '../dropdowns/genTypeDropdown/genTypeDropdown'
import ImageModal from '../modals/imageModal/imageModal'
import TextModal from '../modals/textModal/textModal'
import { useTaskContext } from '../../context/task-context'
import GenTasksButton from '../buttons/genTasksButton/genTasksButton'
import ResultButton from '../buttons/resultButton/resultButton'
import StatusChip from '../statusChip/statusChip'

const TasksTable: React.FC = () => {
  const { rows, setRows } = useTaskContext()
  const [modalImageOpen, setModalImageOpen] = useState(false)
  const [modalTextOpen, setModalTextOpen] = useState(false)
  const [currentIndex, setCurrentIndex] = useState<number | null>(null)

  const handleTaskNameChange = (index: number, newTaskName: string) => {
    setRows((prevRows) => {
      const updatedRows = [...prevRows]
      updatedRows[index].taskName = newTaskName
      return updatedRows
    })
  }

  const handleAmountChange = (index: number, newAmount: string) => {
    setRows((prevRows) => {
      const updatedRows = [...prevRows]
      updatedRows[index].amount = Number(newAmount)
      return updatedRows
    })
  }

  const handleOpenImageModal = (index: number) => {
    setCurrentIndex(index)
    setModalImageOpen(true)
  }

  const handleCloseImageModal = () => {
    setModalImageOpen(false)
    setCurrentIndex(null)
  }

  const handleOpenTextModal = () => {
    setModalTextOpen(true)
  }

  const handleCloseTextModal = () => {
    setModalTextOpen(false)
  }

  return (
    <TableContainer component={Paper}>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell sx={styles.numberColumn}>№</TableCell>
            <TableCell sx={styles.tableCellStyle}>Status</TableCell>
            <TableCell sx={styles.tableCellStyle}>Task name</TableCell>
            <TableCell sx={styles.tableCellStyle}>Dimension</TableCell>
            <TableCell sx={styles.tableCellStyle}>Template ID</TableCell>
            <TableCell sx={styles.tableCellStyle}>Images</TableCell>
            <TableCell sx={styles.tableCellStyle}>Text</TableCell>
            <TableCell sx={styles.tableCellStyle}>Amount</TableCell>
            <TableCell sx={styles.tableCellStyle}>Gen type</TableCell>
            <TableCell sx={styles.tableCellStyle}>Gen tasks</TableCell>
            <TableCell sx={styles.tableCellStyle}>Result Ads</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row, index) => (
            <TableRow key={index}>
              <TableCell sx={styles.numberColumn}>{index + 1}</TableCell>
              <TableCell sx={styles.numberColumn}>
                <StatusChip />
              </TableCell>
              <TableCell sx={styles.tableCellStyle}>
                <TextField
                  onChange={(e) => handleTaskNameChange(index, e.target.value)}
                  size='small'
                  sx={styles.textField}
                  value={row.taskName}
                  variant='outlined'
                />
              </TableCell>
              <TableCell sx={styles.tableCellStyle}>
                <DimensionDropdown index={index} />
              </TableCell>
              <TableCell sx={styles.tableCellStyle}>
                <TemplateIdDropdown index={index} />
              </TableCell>
              <TableCell
                onClick={() => handleOpenImageModal(index)}
                style={{ cursor: 'pointer' }}
                sx={styles.tableCellStyle}
              >
                {row.images.map((image, idx) => (
                  <Chip key={idx} label={image} variant='outlined' />
                ))}
              </TableCell>
              <TableCell
                onClick={() => handleOpenTextModal()}
                style={{ cursor: 'pointer' }}
                sx={styles.tableCellStyle}
              >
                {row.text.map((text, idx) => (
                  <Chip key={idx} label={text} variant='outlined' />
                ))}
              </TableCell>
              <TableCell sx={styles.tableCellStyle}>
                <TextField
                  InputProps={{
                    inputProps: {
                      min: 0,
                      step: 'any'
                    }
                  }}
                  onChange={(e) => handleAmountChange(index, e.target.value)}
                  size='small'
                  sx={styles.textField}
                  type='number'
                  value={row.amount}
                  variant='outlined'
                />
              </TableCell>
              <TableCell sx={styles.tableCellStyle}>
                <GenTypeDropdown index={index} />
              </TableCell>
              <TableCell sx={styles.tableCellStyle}>
                <GenTasksButton />
              </TableCell>
              <TableCell sx={styles.tableCellStyle}>
                <ResultButton />
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
      <ImageModal
        handleClose={handleCloseImageModal}
        index={currentIndex ?? 0}
        open={modalImageOpen}
      />
      <TextModal
        handleClose={handleCloseTextModal}
        index={currentIndex ?? 0}
        open={modalTextOpen}
      />
    </TableContainer>
  )
}

export default TasksTable
