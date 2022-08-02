import { Form } from '../form'
import { Messenger } from '../messenger'
import { useState } from 'react'

const App = () => {
  const [messageText, setMessageText] = useState('')

  const onMessageChange = evt => {
    setMessageText(evt.target.value)
  }
  return (
    <div className='container'>
      <header className='header'>
        <h1>Social Form</h1>
      </header>
      <Messenger messageText={messageText} />
      <Form onMessageChange={onMessageChange} />
    </div>
  )
}

export { App }
