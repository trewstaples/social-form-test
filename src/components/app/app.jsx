import { useState } from 'react'

import { keyboardMarkup } from '../../utils'
import { buttonTypes } from '../../utils'

import { KeyboardSwitch } from '../keyboard-switch'
import { ChannelSelect } from '../channel-select'
import { TextArea } from '../textarea'
import { ButtonAdd } from '../button-add'
import { Messenger } from '../messenger'

import './app.css'

const standartRestrictions = {
  VK: {
    name: 'Вконтакте',
    maxBtnCount: '4', //40
    maxBtnLength: '',
    urlBtn: true,
  },
  WHATSAPP: {
    name: 'WhatsApp',
    maxBtnCount: '1', //
    maxBtnLength: '20',
    urlBtn: false,
  },
  TELEGRAM: {
    name: 'Telegram',
    maxBtnCount: '',
    maxBtnLength: '',
    urlBtn: false,
  },
  SMS: {
    name: 'SMS',
    maxBtnCount: 0,
    maxBtnLength: '',
    urlBtn: '',
  },
}

//maxBtn - ограничение длины массива buttons. Если длина массива кнопок равна 40, то бросать alert (максимум достигнут)
//Если канал SMS, то длина кнопок равна 0 и бросать alert (кнопки не поддерживаются)

const App = () => {
  const [keyboardMode, setKeyboardMode] = useState(keyboardMarkup.standart)
  const [channel, setChannel] = useState('')
  const [textareaValue, setTextareaValue] = useState('')
  const [buttons, setButtons] = useState([])

  const onKeyboardChange = () => {
    setKeyboardMode(prevState =>
      prevState === keyboardMarkup.standart ? keyboardMarkup.inline : keyboardMarkup.standart
    )
    setButtons([])
  }

  const onChannelChange = evt => {
    setChannel(evt.target.value)
    setButtons([])
  }

  const onTextareaChange = evt => {
    setTextareaValue(evt.target.value)
  }

  const createNewButton = btn => {
    return { type: btn.buttonType, value: btn.value }
  }

  const onButtonAdded = btn => {
    const newButton = createNewButton(btn)
    if (buttons.length < standartRestrictions[channel].maxBtnCount) {
      return setButtons([...buttons, newButton])
    }
    alert(
      `В режиме ${standartRestrictions[channel].name} поддерживается максимум ${standartRestrictions[channel].maxBtnCount} кнопок`
    )
    return
  }
  return (
    <div className='container'>
      <header className='header'>
        <h1>Social Form</h1>
      </header>
      <Messenger messageText={textareaValue} keyboardMode={keyboardMode} buttons={buttons} />

      <div className='form-wrapper'>
        <h2>Settings</h2>
        <form>
          <KeyboardSwitch onKeyboardChange={onKeyboardChange} />

          <ChannelSelect onChannelChange={onChannelChange} />

          <TextArea channel={channel} onTextareaChange={onTextareaChange} />

          <ButtonAdd buttonType={buttonTypes.classic} onButtonAdded={onButtonAdded} />
          <ButtonAdd buttonType={buttonTypes.url} onButtonAdded={onButtonAdded} />
        </form>
      </div>
    </div>
  )
}

export { App }
