import { Button, CircularProgress, Snackbar } from '@mui/material'
import { useState } from 'react'
import { useCardContext } from '../../../context/card-context'
import { useHTTP } from '../../../hooks/http.hook'
import { styles } from './genImageButtonStyles'
import { UseHTTPResponse } from '../../../types/genTasks'

const GenImagesButton = ({
  arrayIndex,
  cardIndex
}: {
  arrayIndex: number
  cardIndex: number
}) => {
  const { cards, updateRequestSuccess } = useCardContext()
  const { loading, request, error, clearError } = useHTTP() as UseHTTPResponse
  const [openSnackbar, setOpenSnackbar] = useState<boolean>(false)

  const handleClick = async () => {
    try {
      const card = cards[arrayIndex]?.[cardIndex]
      if (!card) {
        console.error('Card not found')
        return
      }

      const formattedCard = {
        images: card.images,
        dimension: card.dimension,
        style: card.style,
        manual_prompts: card.manual_prompts,
        gen_per_ref: card.gen_per_ref,
        flow: card.flow
      }
      console.log('Formatted Card:', formattedCard)

      const headers: Record<string, string> = {
        Authorization: `${import.meta.env.VITE_API_AUTHORIZATION}`,
        'Content-Type': 'application/json'
      }

      if (typeof request !== 'function') {
        throw new Error('Request function is not defined')
      }

      const response = await request(
        '/api/tz-front/generate_images',
        'POST',
        formattedCard,
        headers
      )
      console.log('Response:', response)

      updateRequestSuccess(arrayIndex, cardIndex, true)
      setOpenSnackbar(true)
    } catch (err) {
      console.error('Request Error:', err)
      updateRequestSuccess(arrayIndex, cardIndex, false)
    } finally {
      clearError()
    }
  }

  const handleClickWrapper = () => {
    handleClick().catch((err) => {
      console.error('Unhandled error:', err)
    })
  }

  const card = cards[arrayIndex]?.[cardIndex]
  const areAllFieldsFilled =
    card &&
    card.images.length > 0 &&
    card.dimension.trim() !== '' &&
    card.style.trim() !== '' &&
    card.manual_prompts.trim() !== '' &&
    card.gen_per_ref > 0 &&
    card.flow.trim() !== ''

  return (
    <>
      <Button
        disabled={!areAllFieldsFilled || loading || card?.requestSuccess}
        onClick={handleClickWrapper}
        sx={styles.buttonStyle}
        variant='contained'
      >
        {loading ? <CircularProgress size={24} /> : 'Generate Images'}
      </Button>
      <Snackbar
        autoHideDuration={6000}
        message='Request successful'
        onClose={() => setOpenSnackbar(false)}
        open={openSnackbar}
      />
      {error && (
        <Snackbar
          autoHideDuration={6000}
          message={error}
          onClose={() => clearError()}
          open={!!error}
        />
      )}
    </>
  )
}

export default GenImagesButton
