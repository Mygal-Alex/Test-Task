export interface TasksData {
  taskName: string
  dimension: string
  templateID: string
  images: string[]
  text: string[]
  amount: number
  genType: string
  requestSuccess: boolean
}

export interface TaskProvideContext {
  rows: TasksData[]
  setRows: React.Dispatch<React.SetStateAction<TasksData[]>>
  updateDimension: (index: number, newDimension: string) => void
  updateGenType: (index: number, newGenType: string) => void
  updateTemplateID: (index: number, newTemplateID: string) => void
  updateImage: (index: number, newImage: string) => void
  updateText: (index: number, newText: string) => void
  updateRequest: (index: number, newStatus: boolean) => void
  addTask: (taskName: string, amount: string) => void
}

export interface TaskProviderProps {
  children: React.ReactNode
}
