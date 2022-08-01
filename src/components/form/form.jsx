import { useState } from 'react'

import { ChannelSelect } from '../channel-select'
import { KeyboardSwitch } from '../keyboard-switch'
import { ButtonAddForm } from '../button-add-form'

import './form.css'

const textAreaMaxLength = {
  VK: '4096',
  WhatsApp: '10',
  Telegram: '4096',
  SMS: '',
}

const keyboardLayout = {
  standart: 'standart',
  inline: 'inline',
}

const Form = () => {
  const [channel, setChannel] = useState('')
  const [keyboardView, setKeyBoardView] = useState(keyboardLayout.standart)

  const onChannelChange = evt => {
    setChannel(evt.target.value)
  }

  const onKeyboardChange = () => {
    setKeyBoardView(prevState =>
      prevState === keyboardLayout.standart ? keyboardLayout.inline : keyboardLayout.standart
    )
  }

  const onAddFastButtonAdded = () => {
    console.log(0)
  }

  return (
    <div className='container'>
      <div className='main'>
        <form>
          <ChannelSelect onChange={onChannelChange} />

          <div className='main__text-wrap'>
            <textarea
              className='main__text'
              autoComplete='off'
              maxLength={textAreaMaxLength[channel]}
            ></textarea>
          </div>

          <KeyboardSwitch onChange={onKeyboardChange} />

          <ButtonAddForm />

          <div className='main__add-fast-button-wrap'>
            <input type='text' className='text' /> <br />
            <input
              type='submit'
              className='main__add-button'
              value='  Добавить кнопку с быстрым ответом'
            />
          </div>

          <div className='main__add-url-button-wrap'>
            <input type='text' className='text' /> <br />
            <button className='main__add-url-button'>Добавить добавить кнопку ссылку</button>
          </div>
        </form>
      </div>
    </div>
  )
}

export { Form }
