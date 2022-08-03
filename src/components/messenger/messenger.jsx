import { ButtonsList } from '../buttons-list'
import { keyboardMarkup } from '../../utils'

import './messenger.css'

const Messenger = ({ messageText, keyboardMode, buttons }) => {
  const messengerMarkup =
    keyboardMode === keyboardMarkup.standart ? (
      <>
        <div className='messenger'>
          <div>{messageText}</div>
        </div>
        <ButtonsList buttons={buttons} />
      </>
    ) : (
      <div className='messenger'>
        <div>{messageText}</div>
        <ButtonsList buttons={buttons} />
      </div>
    )

  return (
    <div className='messenger-wrapper'>
      <h2>Messenger Window</h2>
      {messengerMarkup}
    </div>
  )
}

export { Messenger }
