import InputLabel from '@mui/material/InputLabel'
import MenuItem from '@mui/material/MenuItem'
import FormControl from '@mui/material/FormControl'
import Select, { SelectChangeEvent } from '@mui/material/Select'
import { Chip } from '@mui/material'
import { styles } from './genTypeDropdownStyles'
import { useTaskContext } from '../../../context/task-context'

const GenTypeDropdown = ({ index }: { index: number }) => {
  const { rows, updateGenType } = useTaskContext()
  const genType = rows[index].genType

  const handleChange = (event: SelectChangeEvent) => {
    updateGenType(index, event.target.value)
  }

  return (
    <FormControl size='small' sx={{ m: 1, minWidth: 200 }}>
      <InputLabel></InputLabel>
      <Select onChange={handleChange} value={genType}>
        <MenuItem value={'cyclic_generation'}>
          <Chip
            label={'cyclic_generation'}
            sx={styles.colorCyclic_generation}
          />
        </MenuItem>
        <MenuItem value={'random_generation'}>
          <Chip
            label={'random_generation'}
            sx={styles.colorRandom_generation}
          />
        </MenuItem>
      </Select>
    </FormControl>
  )
}

export default GenTypeDropdown
