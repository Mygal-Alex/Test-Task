import InputLabel from '@mui/material/InputLabel'
import MenuItem from '@mui/material/MenuItem'
import FormControl from '@mui/material/FormControl'
import Select, { SelectChangeEvent } from '@mui/material/Select'
import { Chip } from '@mui/material'
import { styles } from './dimensionDropdownStyles'
import { useTaskContext } from '../../../context/task-context'

const DimensionDropdown = ({ index }: { index: number }) => {
  const { rows, updateDimension } = useTaskContext()
  const dimension = rows[index].dimension

  const handleChange = (event: SelectChangeEvent) => {
    updateDimension(index, event.target.value)
  }

  return (
    <FormControl size='small' sx={{ m: 1, minWidth: 100 }}>
      <InputLabel></InputLabel>
      <Select onChange={handleChange} value={dimension}>
        <MenuItem value={'1x1'}>
          <Chip label={'1x1'} sx={styles.colorChip1x1} />
        </MenuItem>
        <MenuItem value={'9x16'}>
          <Chip label={'9x16'} sx={styles.colorChip9x16} />
        </MenuItem>
        <MenuItem value={'16x9'}>
          <Chip label={'16x9'} sx={styles.colorChip16x9} />
        </MenuItem>
      </Select>
    </FormControl>
  )
}

export default DimensionDropdown
