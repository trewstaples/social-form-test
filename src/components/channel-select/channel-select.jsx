const ChannelSelect = ({ onChannelChange }) => {
  return (
    <div className='form__select-wrapper'>
      <select className='form__select' onChange={onChannelChange}>
        <option value=''>Выберите канал</option>
        <option value='VK'>Вконтакте</option>
        <option value='WhatsApp'>WhatsApp</option>
        <option value='Telegram'>Telegram</option>
        <option value='SMS'>SMS</option>
      </select>
    </div>
  )
}

export { ChannelSelect }
