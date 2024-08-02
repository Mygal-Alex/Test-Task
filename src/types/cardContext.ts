export interface CardsData {
  images: string[]
  dimension: string
  style: string
  manual_prompts: string
  gen_per_ref: number
  flow: string
  requestSuccess: boolean
}

export interface CardProvideContext {
  cards: CardsData[][]
  setCards: React.Dispatch<React.SetStateAction<CardsData[][]>>
  createEmptySubArray: () => void
  updateDimension: (
    arrayIndex: number,
    cardIndex: number,
    newDimension: string
  ) => void
  updateStyle: (arrayIndex: number, cardIndex: number, newStyle: string) => void
  updateManualPrompts: (
    arrayIndex: number,
    cardIndex: number,
    newManualPrompts: string
  ) => void
  updateGenPerRef: (
    arrayIndex: number,
    cardIndex: number,
    newGenPerRef: number
  ) => void
  updateFlow: (arrayIndex: number, cardIndex: number, newFlow: string) => void
  addCard: (arrayIndex: number, image: string) => void
  updateRequestSuccess: (
    arrayIndex: number,
    cardIndex: number,
    status: boolean
  ) => void
}

export interface CardProviderProps {
  children: React.ReactNode
}
