const ChannelSelect = ({ onChannelChange }) => {
  return (
    <div className='form__select-wrapper'>
      <div>
        <b>Выберите канал</b>
      </div>
      <select className='form__select' onChange={onChannelChange}>
        <option value='VK'>Вконтакте</option>
        <option value='WHATSAPP'>WhatsApp</option>
        <option value='TELEGRAM'>Telegram</option>
        <option value='SMS'>SMS</option>
      </select>
    </div>
  )
}

export { ChannelSelect }
