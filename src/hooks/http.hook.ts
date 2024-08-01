import { useState, useCallback } from 'react'
import {
  RequestBody,
  RequestHeaders,
  UseHTTPReturn,
  UserResponse
} from '../types/http'

export const useHTTP = (): UseHTTPReturn => {
  const [loading, setLoading] = useState<boolean>(false)
  const [error, setError] = useState<string | null>(null)

  const request = useCallback(
    async (
      url: string,
      method: string = 'GET',
      body: RequestBody | null = null,
      headers: RequestHeaders = {}
    ): Promise<UserResponse> => {
      setLoading(true)
      try {
        let requestBody: string | null = null

        if (body) {
          requestBody = JSON.stringify(body)
          headers['Content-Type'] = 'application/json'
        }

        console.log('Request URL:', url)
        console.log('Request Method:', method)
        console.log('Request Headers:', headers)
        console.log('Request Body:', requestBody)

        const response = await fetch(url, {
          method,
          body: requestBody,
          headers
        })

        if (!response.ok) {
          const errorText = await response.text()
          throw new Error(`HTTP error ${response.status}: ${errorText}`)
        }

        const data = (await response.json()) as UserResponse

        setLoading(false)
        return data
      } catch (err: unknown) {
        setLoading(false)
        if (err instanceof Error) {
          setError(err.message)
          console.error('Request Error:', err.message)
          throw err
        } else {
          const unknownError = 'An unknown error occurred'
          setError(unknownError)
          console.error('Request Error:', unknownError)
          throw new Error(unknownError)
        }
      }
    },
    []
  )

  const clearError = (): void => setError(null)

  return { loading, request, error, clearError }
}
