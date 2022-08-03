import { useState } from 'react'

import { KeyboardSwitch } from '../keyboard-switch'
import { ChannelSelect } from '../channel-select'
import { TextArea } from '../textarea'
import { ButtonAdd } from '../button-add'
import { Messenger } from '../messenger'

import './app.css'

const keyboardLayout = {
  standart: 'standart',
  inline: 'inline',
}

export const buttonTypes = {
  classic: 'classic',
  url: 'url',
}

const App = () => {
  const [keyboardMode, setKeyboardMode] = useState(keyboardLayout.standart)
  const [channel, setChannel] = useState('')
  const [textareaValue, setTextareaValue] = useState('')
  const [buttons, setButtons] = useState([])

  const onKeyboardChange = () => {
    setKeyboardMode(prevState =>
      prevState === keyboardLayout.standart ? keyboardLayout.inline : keyboardLayout.standart
    )
    setButtons([])
  }

  const onChannelChange = evt => {
    setChannel(evt.target.value)
  }

  const onTextareaChange = evt => {
    setTextareaValue(evt.target.value)
  }

  const createNewButton = btn => {
    return { type: btn.buttonType, value: btn.value }
  }

  const onButtonAdded = btn => {
    const newButton = createNewButton(btn)

    return setButtons([...buttons, newButton])
  }
  return (
    <div className='container'>
      <header className='header'>
        <h1>Social Form</h1>
      </header>
      <Messenger messageText={textareaValue} buttons={buttons} />

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
