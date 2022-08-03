import { useState } from 'react'

import { buttonTypes } from '../form/form'

import './button-add.css'

const buttonClassnames = {
  classic: 'form__button--classic',
  url: 'form__button--url',
}

const ButtonAdd = ({ buttonType, onButtonAdded }) => {
  const [buttonValue, setButtonValue] = useState({ buttonType: '', value: '' })

  const isButtonClassic = buttonType === buttonTypes.classic

  const buttonClassname = isButtonClassic ? buttonClassnames.classic : buttonClassnames.url

  const placeholderText = isButtonClassic
    ? 'Добавьте кнопку с быстрым ответом'
    : 'Впишите URL-кнопки'

  const onClick = evt => {
    evt.preventDefault()
    onButtonAdded(buttonValue)
    setButtonValue({ buttonType: '', value: '' })
  }

  const onLabelChange = evt => {
    setButtonValue({ buttonType: evt.target.className, value: evt.target.value })
  }

  return (
    <div className='form__button-add-wrapper'>
      <input
        type='text'
        className={buttonClassname}
        value={buttonValue.value}
        onChange={onLabelChange}
        placeholder={placeholderText}
      />

      <input type='submit' className='btn form__button-add-plus' value={'+'} onClick={onClick} />
    </div>
  )
}

export { ButtonAdd }
