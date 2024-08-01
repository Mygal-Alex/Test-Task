export interface TasksData {
  taskName: string
  dimension: string
  templateID: string
  images: string[]
  text: string[]
  amount: number
  genType: string
}

export interface TaskProvideContext {
  rows: TasksData[]
  setRows: React.Dispatch<React.SetStateAction<TasksData[]>>
  updateDimension: (index: number, newDimension: string) => void
  updateGenType: (index: number, newGenType: string) => void
  updateTemplateID: (index: number, newTemplateID: string) => void
  updateImage: (index: number, newImage: string) => void
  updateText: (index: number, newText: string) => void
  requestSuccess: boolean
  setRequestSuccess: React.Dispatch<React.SetStateAction<boolean>>
}

export interface TaskProviderProps {
  children: React.ReactNode
}
