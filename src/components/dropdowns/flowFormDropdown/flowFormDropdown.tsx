import {
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  SelectChangeEvent
} from '@mui/material'
import { useCardContext } from '../../../context/card-context'
import { styles } from './flowFormDropdownStyles'

interface FlowFormDropdownProps {
  arrayIndex: number
  cardIndex: number
}

const FlowFormDropdown: React.FC<FlowFormDropdownProps> = ({
  arrayIndex,
  cardIndex
}) => {
  const { cards, updateFlow } = useCardContext()
  const currentCard = cards[arrayIndex][cardIndex]
  const flow = currentCard?.flow || ''

  const handleChange = (event: SelectChangeEvent<string>) => {
    updateFlow(arrayIndex, cardIndex, event.target.value)
  }

  return (
    <FormControl fullWidth sx={styles.formControl}>
      <InputLabel id='flow-select-label'>Flow</InputLabel>
      <Select
        id='flow-select'
        label='Flow'
        labelId='flow-select-label'
        onChange={handleChange}
        sx={styles.select}
        value={flow}
      >
        <MenuItem value={'other_models_mix'}>Other Models Mix</MenuItem>
        <MenuItem value={'mj_model'}>MJ Model</MenuItem>
      </Select>
    </FormControl>
  )
}

export default FlowFormDropdown
