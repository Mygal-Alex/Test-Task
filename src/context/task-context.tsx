import { createContext, useContext, useMemo, useState } from 'react'
import {
  TaskProvideContext,
  TaskProviderProps,
  TasksData
} from '../types/taskContext'

const TaskContext = createContext<TaskProvideContext>({} as TaskProvideContext)

const TaskProvider = ({ children }: TaskProviderProps) => {
  const [rows, setRows] = useState<TasksData[]>([
    {
      taskName: '',
      dimension: '1x1',
      templateID: 'mwpswxcudtwxd',
      images: [],
      text: [],
      amount: 0,
      genType: 'cyclic_generation'
    }
  ])

  const [requestSuccess, setRequestSuccess] = useState<boolean>(false)

  const updateDimension = (index: number, newDimension: string) => {
    setRows((prevRows) => {
      const updatedRows = [...prevRows]
      updatedRows[index].dimension = newDimension
      return updatedRows
    })
  }

  const updateGenType = (index: number, newGenType: string) => {
    setRows((prevRows) => {
      const updatedRows = [...prevRows]
      updatedRows[index].genType = newGenType
      return updatedRows
    })
  }

  const updateTemplateID = (index: number, newTemplateID: string) => {
    setRows((prevRows) => {
      const updatedRows = [...prevRows]
      updatedRows[index].templateID = newTemplateID
      return updatedRows
    })
  }

  const updateImage = (index: number, newImage: string) => {
    setRows((prevRows) => {
      const updatedRows = [...prevRows]
      updatedRows[index].images = [...updatedRows[index].images, newImage]
      return updatedRows
    })
  }

  const updateText = (index: number, newText: string) => {
    setRows((prevRows) => {
      const updatedRows = [...prevRows]
      updatedRows[index].text = [...updatedRows[index].text, newText]
      return updatedRows
    })
  }

  const contextValue = useMemo(
    () => ({
      rows,
      setRows,
      updateDimension,
      updateGenType,
      updateTemplateID,
      updateImage,
      updateText,
      requestSuccess,
      setRequestSuccess
    }),
    [rows, setRows, requestSuccess]
  )

  return (
    <TaskContext.Provider value={contextValue}>{children}</TaskContext.Provider>
  )
}

const useTaskContext = () => useContext(TaskContext)

export { TaskProvider, useTaskContext }
