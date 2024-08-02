import { createContext, useContext, useMemo, useState } from 'react'
import {
  CardProvideContext,
  CardProviderProps,
  CardsData
} from '../types/cardContext'

const CardContext = createContext<CardProvideContext>({} as CardProvideContext)

const CardProvider = ({ children }: CardProviderProps) => {
  const [cards, setCards] = useState<CardsData[][]>([])

  const createEmptySubArray = () => {
    setCards((prevCards) => [...prevCards, []])
  }

  const updateCardProperty = <K extends keyof CardsData>(
    arrayIndex: number,
    cardIndex: number,
    property: K,
    value: CardsData[K]
  ) => {
    setCards((prevCards) => {
      const updatedCards = prevCards.map((cardArray, i) =>
        i === arrayIndex
          ? cardArray.map((card, j) =>
              j === cardIndex ? { ...card, [property]: value } : card
            )
          : cardArray
      )
      return updatedCards
    })
  }

  const updateDimension = (
    arrayIndex: number,
    cardIndex: number,
    newDimension: string
  ) => updateCardProperty(arrayIndex, cardIndex, 'dimension', newDimension)

  const updateStyle = (
    arrayIndex: number,
    cardIndex: number,
    newStyle: string
  ) => updateCardProperty(arrayIndex, cardIndex, 'style', newStyle)

  const updateManualPrompts = (
    arrayIndex: number,
    cardIndex: number,
    newManualPrompts: string
  ) =>
    updateCardProperty(
      arrayIndex,
      cardIndex,
      'manual_prompts',
      newManualPrompts
    )

  const updateGenPerRef = (
    arrayIndex: number,
    cardIndex: number,
    newGenPerRef: number
  ) => updateCardProperty(arrayIndex, cardIndex, 'gen_per_ref', newGenPerRef)

  const updateFlow = (arrayIndex: number, cardIndex: number, newFlow: string) =>
    updateCardProperty(arrayIndex, cardIndex, 'flow', newFlow)

  const addCard = (arrayIndex: number, image: string) => {
    setCards((prevCards) => {
      const updatedCards = [...prevCards]
      updatedCards[arrayIndex].push({
        images: [image],
        dimension: '1x1',
        style: 'An ultra-realistic photography',
        manual_prompts: '',
        gen_per_ref: 0,
        flow: 'other_models_mix',
        requestSuccess: false
      })
      return updatedCards
    })
  }

  const updateRequestSuccess = (
    arrayIndex: number,
    cardIndex: number,
    status: boolean
  ) => {
    updateCardProperty(arrayIndex, cardIndex, 'requestSuccess', status)
  }

  const contextValue = useMemo(
    () => ({
      cards,
      setCards,
      createEmptySubArray,
      updateDimension,
      updateStyle,
      updateManualPrompts,
      updateGenPerRef,
      updateFlow,
      addCard,
      updateRequestSuccess
    }),
    [
      cards,
      setCards,
      updateDimension,
      updateStyle,
      updateManualPrompts,
      updateGenPerRef,
      updateFlow,
      addCard,
      updateRequestSuccess
    ] // добавлены все зависимости
  )

  return (
    <CardContext.Provider value={contextValue}>{children}</CardContext.Provider>
  )
}

const useCardContext = () => useContext(CardContext)

export { CardProvider, useCardContext }
