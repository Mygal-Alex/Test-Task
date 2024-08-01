export interface TaskRow {
  taskName: string
  dimension: string
  templateID: string
  amount: number
  genType: string
  images: string[]
  text: string[]
}

export interface FormattedTaskRow {
  task_name: string
  dimension: string
  template_id: string
  amount: number
  gen_type: string
  image_layers: string[]
  text_layers: string[]
}

export interface TaskContextType {
  rows: TaskRow[]
  requestSuccess: boolean
  setRequestSuccess: (success: boolean) => void
}

export interface UseHTTPResponse {
  loading: boolean
  request: <T>(
    url: string,
    method: string,
    body: T,
    headers: Record<string, string>
  ) => Promise<T>
  error: string | null
  clearError: () => void
}
