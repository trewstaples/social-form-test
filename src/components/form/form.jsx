import { useState } from 'react'

import { ChannelSelect } from '../channel-select'
import { TextArea } from '../textarea'
import { KeyboardSwitch } from '../keyboard-switch'
import { ButtonsList } from '../buttons-list'
import { ButtonAddForm } from '../button-add'

import './form.css'

const keyboardLayout = {
  standart: 'standart',
  inline: 'inline',
}

export const buttonTypes = {
  classic: 'classic',
  url: 'url',
}

const Form = ({ onMessageChange, onButtonAdded }) => {
  const [channel, setChannel] = useState('')
  const [keyboardMode, setKeyboardMode] = useState(keyboardLayout.standart)

  const onChannelChange = evt => {
    setChannel(evt.target.value)
  }

  // const onKeyboardChange = () => {
  //   setKeyboardMode(prevState =>
  //     prevState === keyboardLayout.standart ? keyboardLayout.inline : keyboardLayout.standart
  //   )
  //   setButtons([])
  // }

  return (
    <div className='form-wrapper'>
      <h2>Settings</h2>
      <form>
        <ChannelSelect onChannelChange={onChannelChange} />

        {/* <KeyboardSwitch onKeyboardChange={onKeyboardChange} /> */}

        <TextArea channel={channel} onMessageChange={onMessageChange} />

        {/* <ButtonsList buttons={buttons} /> */}

        <ButtonAddForm buttonType={buttonTypes.classic} onButtonAdded={onButtonAdded} />
        <ButtonAddForm buttonType={buttonTypes.url} onButtonAdded={onButtonAdded} />
      </form>
    </div>
  )
}

export { Form }
