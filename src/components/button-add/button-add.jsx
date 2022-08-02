import { useState } from 'react'

import { buttonTypes } from '../form/form'

import './button-add.css'

const ButtonAdd = ({ buttonType, onButtonAdded }) => {
  const [formValue, setFormValue] = useState('')

  const isButtonClassic = buttonType === buttonTypes.classic

  const onClick = evt => {
    evt.preventDefault()
    onButtonAdded(evt.target.placeholder, formValue)
    setFormValue('')
  }

  const onLabelChange = evt => {
    setFormValue(evt.target.value)
  }

  const placeholderText = isButtonClassic
    ? 'Добавьте кнопку с быстрым ответом'
    : 'Впишите URL-кнопки'

  return (
    <div className='form__button-add-wrapper'>
      <input
        type='text'
        className='form__button-add-text'
        value={formValue}
        onChange={onLabelChange}
        placeholder={placeholderText}
      />

      <input type='submit' className='btn form__button-add-plus' value={'+'} onClick={onClick} />
    </div>
  )
}

export { ButtonAdd as ButtonAddForm }
