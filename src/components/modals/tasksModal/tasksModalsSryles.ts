import { SxProps, Theme } from '@mui/material/styles'

export const styles: { [key: string]: SxProps<Theme> } = {
  modal: {
    width: 400,
    height: 400,
    position: 'relative',
    bgcolor: 'background.paper',
    p: 4,
    borderRadius: 2,
    boxShadow: 24,
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center'
  },
  closeButton: {
    position: 'absolute',
    top: 16,
    right: 16
  },
  title: {
    mb: 2
  },
  textField: {
    width: 300,
    mb: 2
  },
  button: {
    width: 300
  }
}
