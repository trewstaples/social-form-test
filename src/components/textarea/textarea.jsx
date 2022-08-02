const textAreaMaxLength = {
  VK: '4096',
  WhatsApp: '10',
  Telegram: '4096',
  SMS: '',
}

const TextArea = ({ channel }) => {
  return (
    <div className='main__text-wrap'>
      <textarea
        className='main__text'
        autoComplete='off'
        maxLength={textAreaMaxLength[channel]}
      ></textarea>
    </div>
  )
}

export { TextArea }
