import { Box } from '@mui/material'
import { styles } from './pageWrapperStyles'
import { PageWrapperProps } from '../../types/pageWrapper'

const PageWrapper: React.FC<PageWrapperProps> = ({ children }) => {
  return <Box sx={styles.screenWidth}>{children}</Box>
}

export default PageWrapper
