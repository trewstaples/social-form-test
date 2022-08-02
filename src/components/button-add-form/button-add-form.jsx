import { useState } from 'react'

import { keyboardLayout } from '../form/form'

import './button-add-form.css'

const ButtonAddForm = ({ keyboardMode, onButtonAdded }) => {
  const [formValue, setFormValue] = useState('')

  const onClick = evt => {
    evt.preventDefault()
    onButtonAdded(formValue)
    setFormValue('')
  }

  const onLabelChange = evt => {
    setFormValue(evt.target.value)
  }

  const placeholderText =
    keyboardMode === keyboardLayout.standart
      ? 'Добавьте кнопку с быстрым ответом'
      : 'Добавьте кнопку-ссылку'

  return (
    <div className='main__add'>
      <input
        type='text'
        className='main__add-form-control'
        value={formValue}
        onChange={onLabelChange}
        placeholder={placeholderText}
      />

      <input type='submit' className='btn add-form__button' value={'+'} onClick={onClick} />
    </div>
  )
}

export { ButtonAddForm }
