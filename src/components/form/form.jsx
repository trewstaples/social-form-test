import { useState } from 'react'
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
          <div className='main__select-wrap'>
            <select className='main__select' onChange={onChannelChange}>
              <option value=''>Выберите канал</option>
              <option value='VK'>Вконтакте</option>
              <option value='WhatsApp'>WhatsApp</option>
              <option value='Telegram'>Telegram</option>
              <option value='SMS'>SMS</option>
            </select>
          </div>

          <div className='main__text-wrap'>
            <textarea
              className='main__text'
              autoComplete='off'
              maxLength={textAreaMaxLength[channel]}
            ></textarea>
          </div>

          {/* {buttons.map(btn => (
            <div className='main__buttons'>
              <button className='main__buttons-item'>btn.value</button>
            </div>
          ))} */}

          <div className='main__switch-button-wrap'>
            <span>Standard</span>
            <label className='switch' onChange={onKeyboardChange}>
              <input type='checkbox' />
              <span className='slider'></span>
            </label>
            <span>Inline</span>
          </div>

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
