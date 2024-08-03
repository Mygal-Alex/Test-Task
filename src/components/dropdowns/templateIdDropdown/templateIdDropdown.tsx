import InputLabel from '@mui/material/InputLabel'
import MenuItem from '@mui/material/MenuItem'
import FormControl from '@mui/material/FormControl'
import Select, { SelectChangeEvent } from '@mui/material/Select'
import { Chip } from '@mui/material'
import { useState } from 'react'
import { styles } from './templateIdDropdownStyles'
import { useTaskContext } from '../../../context/task-context'
import { TemplateIdDropdownProps } from '../../../types/templateIdDropdown'

const TemplateIdDropdown: React.FC<TemplateIdDropdownProps> = ({ index }) => {
  const { rows, updateTemplateID } = useTaskContext()
  const [template, setTemplate] = useState(
    rows[index].templateID || 'mwpswxcudtwxd'
  )

  const handleChange = (event: SelectChangeEvent) => {
    const newTemplateID = event.target.value
    setTemplate(newTemplateID)
    updateTemplateID(index, newTemplateID)
  }

  return (
    <FormControl size='small' sx={{ m: 1, minWidth: 200 }}>
      <InputLabel></InputLabel>
      <Select onChange={handleChange} value={template}>
        <MenuItem value={'mwpswxcudtwxd'}>
          <Chip label={'mwpswxcudtwxd'} sx={styles.colorMwpswxcudtwxd} />
        </MenuItem>
        <MenuItem value={'Oxdoscyowl50c'}>
          <Chip label={'Oxdoscyowl50c'} sx={styles.colorOxdoscyowl50c} />
        </MenuItem>
      </Select>
    </FormControl>
  )
}

export default TemplateIdDropdown
