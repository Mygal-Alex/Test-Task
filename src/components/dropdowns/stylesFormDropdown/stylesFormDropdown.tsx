import {
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  SelectChangeEvent
} from '@mui/material'
import { styles } from './stylesFormDropdownStyles'
import { useCardContext } from '../../../context/card-context'

interface StylesFormDropdownProps {
  arrayIndex: number
  cardIndex: number
}

const StylesFormDropdown: React.FC<StylesFormDropdownProps> = ({
  arrayIndex,
  cardIndex
}) => {
  const { cards, updateStyle } = useCardContext()
  const currentCard = cards[arrayIndex][cardIndex]
  const style = currentCard?.style || ''

  const handleChange = (event: SelectChangeEvent<string>) => {
    updateStyle(arrayIndex, cardIndex, event.target.value)
  }

  return (
    <FormControl fullWidth sx={styles.formControl}>
      <InputLabel id='style-select-label'>Style</InputLabel>
      <Select
        id='style-select'
        label='Style'
        labelId='style-select-label'
        onChange={handleChange}
        sx={styles.select}
        value={style}
      >
        <MenuItem value={'An ultra-realistic photography'}>
          An ultra-realistic photography
        </MenuItem>
        <MenuItem value={'Anime style'}>Anime style</MenuItem>
      </Select>
    </FormControl>
  )
}

export default StylesFormDropdown
