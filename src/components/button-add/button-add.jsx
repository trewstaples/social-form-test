import { useState } from 'react'

import { buttonTypes } from '../form/form'

import './button-add.css'

const buttonClassnames = {
  classic: 'form__button-add-text--classic',
  url: 'form__button-add-text--url',
}

const ButtonAdd = ({ buttonType, onButtonAdded }) => {
  const [formValue, setFormValue] = useState('')

  const isButtonClassic = buttonType === buttonTypes.classic

  const buttonClassname = isButtonClassic ? buttonClassnames.classic : buttonClassnames.url

  const placeholderText = isButtonClassic
    ? 'Добавьте кнопку с быстрым ответом'
    : 'Впишите URL-кнопки'

  const onClick = evt => {
    evt.preventDefault()
    onButtonAdded(formValue)
    setFormValue('')
  }

  const onLabelChange = evt => {
    setFormValue(evt.target.value)
  }

  return (
    <div className='form__button-add-wrapper'>
      <input
        type='text'
        className={buttonClassname}
        value={formValue}
        onChange={onLabelChange}
        placeholder={placeholderText}
      />

      <input type='submit' className='btn form__button-add-plus' value={'+'} onClick={onClick} />
    </div>
  )
}

export { ButtonAdd as ButtonAddForm }
