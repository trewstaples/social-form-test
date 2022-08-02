import './textarea.css'

const textAreaMaxLength = {
  VK: '4096',
  WhatsApp: '10',
  Telegram: '4096',
  SMS: '',
}

const TextArea = ({ channel }) => {
  return (
    <div className='main__textarea-wrap'>
      <textarea maxLength={textAreaMaxLength[channel]}></textarea>
    </div>
  )
}

export { TextArea }
