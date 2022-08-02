import './messenger.css'

const Messenger = ({ messageText }) => {
  return (
    <div className='messenger-wrap'>
      <h2>Messanger Window</h2>
      <div className='messenger'>
        <div>{messageText}</div>
      </div>
    </div>
  )
}

export { Messenger }
