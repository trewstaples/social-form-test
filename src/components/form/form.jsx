import { useState } from 'react'

const Form = () => {
  const [channel, setChannel] = useState('')

  const onChannelChange = evt => {
    setChannel(evt.target.value)
  }

  return (
    <form>
      <select onChange={onChannelChange}>
        <option value=''>Выберите канал</option>
        <option value='VK'>Вконтакте</option>
        <option value='WhatsApp'>WhatsApp</option>
        <option value='Telegram'>Telegram</option>
        <option value='SMS'>SMS</option>
      </select>
    </form>
  )
}

export { Form }
