import { useState, useEffect } from 'react'

import { buttonTypes, buttonClassnames } from '../../utils'

import './button-add.css'

const buttonInitialState = { buttonType: '', value: '' }

const ButtonAdd = ({ buttonType, onButtonAdded, buttonsMaxLength }) => {
  const [buttonValue, setButtonValue] = useState(buttonInitialState)

  const isButtonClassic = buttonType === buttonTypes.classic

  const buttonClassname = isButtonClassic ? buttonClassnames.classic : buttonClassnames.url

  const placeholderText = isButtonClassic
    ? 'Добавьте кнопку с быстрым ответом'
    : 'Впишите URL-кнопки'

  useEffect(() => {
    setButtonValue(buttonInitialState)
  }, [buttonsMaxLength])

  const onClick = evt => {
    evt.preventDefault()
    onButtonAdded(buttonValue)
    setButtonValue({ buttonType: '', value: '' })
  }

  const onLabelChange = evt => {
    setButtonValue({
      buttonType: evt.target.className,
      value: evt.target.value,
    })
  }

  return (
    <div className='form__button-add-wrapper'>
      <input
        type='text'
        className={buttonClassname}
        value={buttonValue.value}
        onChange={onLabelChange}
        placeholder={placeholderText}
        maxLength={buttonsMaxLength}
      />

      <input type='submit' className='btn form__button-add-plus' value={'+'} onClick={onClick} />
    </div>
  )
}

export { ButtonAdd }
