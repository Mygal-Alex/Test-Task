import { useState } from 'react'
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  Chip
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
import { useNavigate } from 'react-router-dom'

const TasksTable: React.FC = () => {
  const { rows } = useTaskContext()
  const [modalImageOpen, setModalImageOpen] = useState(false)
  const [modalTextOpen, setModalTextOpen] = useState(false)
  const [currentIndex, setCurrentIndex] = useState<number | null>(null)
  const navigate = useNavigate()

  const handleOpenImageModal = (index: number) => {
    setCurrentIndex(index)
    setModalImageOpen(true)
  }

  const handleCloseImageModal = () => {
    setModalImageOpen(false)
    setCurrentIndex(null)
  }

  const handleOpenTextModal = (index: number) => {
    setCurrentIndex(index)
    setModalTextOpen(true)
  }

  const handleCloseTextModal = () => {
    setModalTextOpen(false)
    setCurrentIndex(null)
  }

  const handleNavigate = (index: number) => {
    navigate(`/taskCard/${index + 1}`)
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
                <StatusChip index={index} />
              </TableCell>
              <TableCell
                onClick={() => handleNavigate(index)}
                style={{ cursor: 'pointer' }}
                sx={styles.tableCellStyle}
              >
                {row.taskName}
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
                onClick={() => handleOpenTextModal(index)}
                style={{ cursor: 'pointer' }}
                sx={styles.tableCellStyle}
              >
                {row.text.map((text, idx) => (
                  <Chip key={idx} label={text} variant='outlined' />
                ))}
              </TableCell>
              <TableCell sx={styles.tableCellStyle}>{row.amount}</TableCell>
              <TableCell sx={styles.tableCellStyle}>
                <GenTypeDropdown index={index} />
              </TableCell>
              <TableCell sx={styles.tableCellStyle}>
                <GenTasksButton index={index} />
              </TableCell>
              <TableCell sx={styles.tableCellStyle}>
                <ResultButton index={index} />
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
