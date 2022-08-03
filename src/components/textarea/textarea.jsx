import './textarea.css'

const textAreaMaxLength = {
  VK: '4096',
  WhatsApp: '1000',
  Telegram: '4096',
  SMS: '',
}

const TextArea = ({ channel, onTextareaChange }) => {
  return (
    <div className='form__textarea-wrapper'>
      <textarea maxLength={textAreaMaxLength[channel]} onChange={onTextareaChange}></textarea>
    </div>
  )
}

export { TextArea }
