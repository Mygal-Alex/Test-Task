export interface RequestBody {
  [key: string]: string | number | boolean | object | null
}

export interface RequestHeaders {
  [key: string]: string
}

export interface UserResponse {
  userId: string
  token: string
  name: string
  email: string
}
export interface UseHTTPReturn {
  loading: boolean
  request: (
    url: string,
    method?: string,
    body?: RequestBody | null,
    headers?: RequestHeaders
  ) => Promise<UserResponse>
  error: string | null
  clearError: () => void
}
