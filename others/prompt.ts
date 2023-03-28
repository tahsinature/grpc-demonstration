import prompts from 'prompts'

interface IChoice {
  title: string
  value: any
  disabled?: boolean
  selected?: boolean
  description?: string
}

interface IOption {
  message?: string
}

export const askMultiInput = (choices: IChoice[], option: IOption) => {
  return prompts(
    {
      type: 'select',
      name: 'operation',
      message: option.message || 'Select an operation',
      choices
    },
    { onCancel: () => process.exit() }
  )
}

export const askNumber = (message: string) => {
  return prompts(
    {
      type: 'number',
      name: 'number',
      initial: 100,
      float: false,
      message
    },
    { onCancel: () => process.exit() }
  )
}
