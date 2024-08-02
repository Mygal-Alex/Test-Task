import {
  Box,
  Typography,
  Select,
  MenuItem,
  FormControl,
  InputLabel,
  SelectChangeEvent,
  TextField
} from '@mui/material'
import { useTaskContext } from '../../context/task-context'
import { useCardContext } from '../../context/card-context'
import { useState, useEffect } from 'react'
import { styles } from './taskFormStyles'
import { CardsData } from '../../types/cardContext'
import DimensionFormDropdown from '../dropdowns/dimensionFormDropdown/dimensionFormDropdown'
import FlowFormDropdown from '../dropdowns/flowFormDropdown/flowFormDropdown'
import StylesFormDropdown from '../dropdowns/stylesFormDropdown/stylesFormDropdown'
import GenImagesButton from '../buttons/genImageButton/genImageButton'

interface TaskFormProps {
  index: number
}

const TaskForm: React.FC<TaskFormProps> = ({ index }) => {
  const { rows } = useTaskContext()
  const { cards, updateManualPrompts, updateGenPerRef } = useCardContext()
  const [selectedImage, setSelectedImage] = useState('')
  const [selectedCard, setSelectedCard] = useState<CardsData | null>(null)
  const [cardIndex, setCardIndex] = useState<number | null>(null)

  useEffect(() => {
    console.log(cards[index])
  }, [index, cards])

  useEffect(() => {
    if (selectedImage) {
      const cardIdx = rows[index].images.indexOf(selectedImage)
      if (cardIdx !== -1) {
        setCardIndex(cardIdx)
        setSelectedCard(cards[index][cardIdx])
      }
    }
  }, [selectedImage, rows, cards, index])

  const handleImageChange = (event: SelectChangeEvent<string>) => {
    const image = event.target.value
    setSelectedImage(image)
  }

  const handleManualPromptsChange = (
    e: React.ChangeEvent<HTMLInputElement>
  ) => {
    if (cardIndex !== null) {
      updateManualPrompts(index, cardIndex, e.target.value)
    }
  }

  const handleGenPerRefChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (cardIndex !== null) {
      updateGenPerRef(index, cardIndex, parseInt(e.target.value))
    }
  }

  return (
    <Box sx={styles.container}>
      <Typography sx={styles.heading} variant='h4'>
        {rows[index].taskName}
      </Typography>
      <FormControl sx={styles.formControl}>
        <InputLabel id='image-select-label'>Image</InputLabel>
        <Select
          id='image-select'
          label='Image'
          labelId='image-select-label'
          onChange={handleImageChange}
          sx={styles.select}
          value={selectedImage}
        >
          {rows[index].images.map((image, i) => (
            <MenuItem key={i} value={image}>
              {image}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
      {selectedCard && cardIndex !== null && (
        <Box sx={styles.fieldsContainer}>
          <DimensionFormDropdown arrayIndex={index} cardIndex={cardIndex} />
          <StylesFormDropdown arrayIndex={index} cardIndex={cardIndex} />
          <TextField
            fullWidth
            label='Manual Prompts'
            onChange={handleManualPromptsChange}
            sx={styles.textField}
            value={selectedCard.manual_prompts}
          />
          <TextField
            fullWidth
            label='Gen Per Ref'
            onChange={handleGenPerRefChange}
            sx={styles.textField}
            type='number'
            value={selectedCard.gen_per_ref}
          />
          <FlowFormDropdown arrayIndex={index} cardIndex={cardIndex} />
          <GenImagesButton
            arrayIndex={index}
            cardIndex={cards[index].indexOf(selectedCard)}
          />
        </Box>
      )}
    </Box>
  )
}

export default TaskForm
