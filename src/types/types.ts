export interface IInput {
  data: string
  isDirty: boolean
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void
  onBlur: (e: React.FocusEvent<HTMLInputElement>) => void
  isValid?: boolean
  errorMessage?: string
}

export interface IValidation {
  isValid: boolean
  errorMessage: string
}

export interface IChapter {
  name: string,
  idParent?: number
}



