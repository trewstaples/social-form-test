import './textarea.css'

const textAreaMaxLength = {
  VK: '4096',
  WhatsApp: '10',
  Telegram: '4096',
  SMS: '',
}

const TextArea = ({ channel, onMessageChange }) => {
  return (
    <div className='main__textarea-wrap'>
      <textarea maxLength={textAreaMaxLength[channel]} onChange={onMessageChange}></textarea>
    </div>
  )
}

export { TextArea }
