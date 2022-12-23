import { TypedUseSelectorHook, useSelector } from 'react-redux'
import { RootState } from '../store/index'

export const useTypeSelector: TypedUseSelectorHook<RootState> = useSelector
