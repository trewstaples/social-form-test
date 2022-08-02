import { ButtonsList } from '../buttons-list'

import './messenger.css'

const Messenger = ({ messageText, buttons }) => {
  return (
    <div className='messenger-wrapper'>
      <h2>Messanger Window</h2>
      <div className='messenger'>
        <div>{messageText}</div>
      </div>
      <ButtonsList buttons={buttons} />
    </div>
  )
}

export { Messenger }
