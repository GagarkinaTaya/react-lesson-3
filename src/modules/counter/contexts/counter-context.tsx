import { createContext } from 'react'

export interface CounterContextType {
    count: number
    increment: () => void
    decrement: () => void
    reset: () => void
}

export const CounterContext = createContext<CounterContextType | undefined>(
    undefined
)