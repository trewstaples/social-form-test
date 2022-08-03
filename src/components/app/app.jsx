import { useState } from 'react'

import {
  keyboardMarkup,
  buttonTypes,
  buttonClassnames,
  standartRestrictions,
  inlineRestrictions,
} from '../../utils'

import { KeyboardSwitch } from '../keyboard-switch'
import { ChannelSelect } from '../channel-select'
import { TextArea } from '../textarea'
import { ButtonAdd } from '../button-add'
import { Messenger } from '../messenger'

import './app.css'

const App = () => {
  const [keyboardMode, setKeyboardMode] = useState(keyboardMarkup.standart)
  const [channel, setChannel] = useState('VK')
  const [textareaValue, setTextareaValue] = useState('')
  const [buttons, setButtons] = useState([])
  const [buttonsMaxLength, setButtonsMaxLength] = useState('')

  let restrictionRules =
    keyboardMode === keyboardMarkup.standart ? standartRestrictions : inlineRestrictions

  const onKeyboardChange = () => {
    setKeyboardMode(prevState =>
      prevState === keyboardMarkup.standart ? keyboardMarkup.inline : keyboardMarkup.standart
    )
    setButtons([])
  }

  const onChannelChange = evt => {
    setChannel(evt.target.value)
    setButtonsMaxLength(restrictionRules[channel].maxBtnLength)
    setButtons([])
  }

  const onTextareaChange = evt => {
    setTextareaValue(evt.target.value)
  }

  const createNewButton = btn => {
    return { type: btn.buttonType, value: btn.value }
  }

  const onButtonAdded = btn => {
    if (channel === 'WHATSAPP' && keyboardMode === keyboardMarkup.inline) {
      console.log(buttons)
      const isUrlButtonsEnough = buttons.find(button => button.type === buttonClassnames.url)
      console.log(isUrlButtonsEnough)
      if (isUrlButtonsEnough) {
        alert('Максимальное количество url-кнопок в режиме WhatsApp : 1шт')
        return
      }
    }

    const newButton = createNewButton(btn)

    if (
      buttons.length < restrictionRules[channel].maxBtnCount ||
      restrictionRules[channel].maxBtnCount === '-'
    ) {
      return setButtons([...buttons, newButton])
    }
    alert(
      `Максимальное количество кнопок в режиме ${restrictionRules[channel].name} : ${restrictionRules[channel].maxBtnCount}шт`
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

        <ChannelSelect onChannelChange={onChannelChange} />
        <form className={'form'}>
          <KeyboardSwitch onKeyboardChange={onKeyboardChange} />

          <TextArea channel={channel} onTextareaChange={onTextareaChange} />

          <ButtonAdd
            buttonType={buttonTypes.classic}
            onButtonAdded={onButtonAdded}
            buttonsMaxLength={buttonsMaxLength}
          />

          {restrictionRules[channel].urlBtn ? (
            <ButtonAdd buttonType={buttonTypes.url} onButtonAdded={onButtonAdded} />
          ) : (
            ''
          )}
        </form>
      </div>
    </div>
  )
}

export { App }
