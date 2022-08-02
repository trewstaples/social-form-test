import { useState } from 'react'

import { ChannelSelect } from '../channel-select'
import { TextArea } from '../textarea'
import { KeyboardSwitch } from '../keyboard-switch'
import { ButtonsList } from '../buttons-list'
import { ButtonAddForm } from '../button-add-form'

import './form.css'

export const keyboardLayout = {
  standart: 'standart',
  inline: 'inline',
}

export const createNewButton = label => {
  return { value: label }
}

const Form = ({ onMessageChange }) => {
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
    setButtons([])
  }

  const onButtonAdded = text => {
    const newButton = createNewButton(text)

    return setButtons([...buttons, newButton])
  }

  return (
    <div className='form-wrap'>
      <h2>Settings</h2>
      <form>
        <ChannelSelect onChannelChange={onChannelChange} />

        <KeyboardSwitch onKeyboardChange={onKeyboardChange} />

        <TextArea channel={channel} onMessageChange={onMessageChange} />

        {/* <ButtonsList buttons={buttons} /> */}

        <ButtonAddForm keyboardMode={keyboardLayout.standart} onButtonAdded={onButtonAdded} />
        <ButtonAddForm keyboardMode={keyboardLayout.inline} onButtonAdded={onButtonAdded} />
      </form>
    </div>
  )
}

export { Form }
