import { useState, useEffect } from 'react'
import { ButtonsList } from '../buttons-list'

import './textarea.css'

const textAreaMaxLength = {
  VK: '4096',
  WhatsApp: '10',
  Telegram: '4096',
  SMS: '',
}

const TextArea = ({ channel, buttons }) => {
  const [currentButtonPosition, setCurrentButtonPosition] = useState(0)

  // useEffect(() => {
  //   const currentButtonState = document.querySelector('.main__buttons')

  //   console.log(currentButtonState.lastChild.style)
  // })

  return (
    <div className='main__textarea-wrap'>
      <textarea maxLength={textAreaMaxLength[channel]}></textarea>
      <ButtonsList buttons={buttons} currentButtonPosition={currentButtonPosition} />
    </div>
  )
}

export { TextArea }

//Каждой новой кнопке передавать свои стили
//Координаты каждой кнопки = длина ряда + длина новой кнопки
