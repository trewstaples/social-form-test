import { useState } from 'react'

import { ChannelSelect } from '../channel-select'
import { KeyboardSwitch } from '../keyboard-switch'
import { ButtonsList } from '../buttons-list'
import { ButtonAddForm } from '../button-add-form'

import './form.css'

const textAreaMaxLength = {
  VK: '4096',
  WhatsApp: '10',
  Telegram: '4096',
  SMS: '',
}

export const keyboardLayout = {
  standart: 'standart',
  inline: 'inline',
}

export const createNewButton = label => {
  return { value: label }
}

const Form = () => {
  const [channel, setChannel] = useState('')
  const [keyboardMode, setKeyboardMode] = useState(keyboardLayout.standart)
  const [buttons, setButtons] = useState([])

  const onChannelChange = evt => {
    setChannel(evt.target.value)
  }

  const onKeyboardChange = () => {
    setKeyboardMode(prevState =>
      prevState === keyboardLayout.standart ? keyboardLayout.inline : keyboardLayout.standart
    )
  }

  const onButtonAdded = text => {
    const newButton = createNewButton(text)

    return setButtons([...buttons, newButton])
  }

  return (
    <div className='container'>
      <div className='main'>
        <form>
          <ChannelSelect onChannelChange={onChannelChange} />

          <div className='main__text-wrap'>
            <textarea
              className='main__text'
              autoComplete='off'
              maxLength={textAreaMaxLength[channel]}
            ></textarea>
          </div>

          <KeyboardSwitch onKeyboardChange={onKeyboardChange} />

          <ButtonsList buttons={buttons} />

          <ButtonAddForm keyboardMode={keyboardMode} onButtonAdded={onButtonAdded} />
        </form>
      </div>
    </div>
  )
}

export { Form }
