import './textarea.css'

const textAreaMaxLength = {
  VK: '4096',
  WhatsApp: '10',
  Telegram: '4096',
  SMS: '',
}

const TextArea = ({ channel, onMessageChange }) => {
  return (
    <div className='form__textarea-wrapper'>
      <textarea maxLength={textAreaMaxLength[channel]} onChange={onMessageChange}></textarea>
    </div>
  )
}

export { TextArea }
