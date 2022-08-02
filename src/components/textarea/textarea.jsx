import './textarea.css'

const textAreaMaxLength = {
  VK: '4096',
  WhatsApp: '10',
  Telegram: '4096',
  SMS: '',
}

let lastButtonWidth = 0

let buttonStartPosition = {
  left: lastButtonWidth,
}

const TextArea = ({ channel }) => {
  return (
    <div className='main__textarea-wrap'>
      <textarea maxLength={textAreaMaxLength[channel]} name={'foo'}>
        Введите сообщение...
      </textarea>
      <div className='main__textarea-buttons-wrap'>
        <button style={{ position: 'absolute', bottom: 0, left: lastButtonWidth }}>Menu</button>
        <button style={{ position: 'absolute', bottom: 0, left: lastButtonWidth + '56.5469px' }}>
          PlaceholdeButton
        </button>
        <button style={{ position: 'absolute', bottom: 0, left: 150 }}>PlaceholdeButton</button>
        <button style={{ position: 'absolute', bottom: 0, left: 300 }}>PlaceholdeButton</button>
        <button style={{ position: 'absolute', bottom: 0, left: 400 }}>PlaceholdeButton</button>
      </div>
    </div>
  )
}

export { TextArea }
