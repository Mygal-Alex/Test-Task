import { SxProps, Theme } from '@mui/material'

export const styles: { [key: string]: SxProps<Theme> } = {
  tableCellStyle: {
    border: '1px solid lightgray',
    width: '12%'
  },
  buttonStyle: {
    marginRight: '8px'
  },
  numberColumn: {
    border: '1px solid lightgray',
    width: '2%'
  },
  textField: {
    '& .MuiOutlinedInput-root': {
      borderColor: 'transparent'
    },
    '& .MuiOutlinedInput-notchedOutline': {
      borderColor: 'transparent'
    },
    '& .MuiInputBase-input': {
      padding: '8px'
    }
  }
}
