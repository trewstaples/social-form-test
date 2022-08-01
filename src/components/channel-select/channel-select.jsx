const ChannelSelect = ({ onChannelChange }) => {
  return (
    <div className='main__channel-select-wrap'>
      <select className='main__channel-select' onChange={onChannelChange}>
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
