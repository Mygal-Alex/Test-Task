import {
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  SelectChangeEvent
} from '@mui/material'
import { useCardContext } from '../../../context/card-context'
import { styles } from './DimensionFormDropdownStyles'

const DimensionFormDropdown = ({
  arrayIndex,
  cardIndex
}: {
  arrayIndex: number
  cardIndex: number
}) => {
  const { cards, updateDimension } = useCardContext()
  const dimension = cards[arrayIndex]?.[cardIndex]?.dimension || ''

  const handleChange = (event: SelectChangeEvent<string>) => {
    updateDimension(arrayIndex, cardIndex, event.target.value)
  }

  return (
    <FormControl fullWidth sx={styles.formControl}>
      <InputLabel id='dimension-select-label'>Dimension</InputLabel>
      <Select
        id='dimension-select'
        label='Dimension'
        labelId='dimension-select-label'
        onChange={handleChange}
        sx={styles.select}
        value={dimension}
      >
        <MenuItem value={'1x1'}>1x1</MenuItem>
        <MenuItem value={'9x16'}>9x16</MenuItem>
        <MenuItem value={'16x9'}>16x9</MenuItem>
      </Select>
    </FormControl>
  )
}

export default DimensionFormDropdown
