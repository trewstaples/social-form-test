import { Form } from '../form'
import { Messenger } from '../messenger'
import { useState } from 'react'

const App = () => {
  const [messageText, setMessageText] = useState('')
  const [buttons, setButtons] = useState([])

  const createNewButton = (type, label) => {
    return { type: type, value: label }
  }

  const onMessageChange = evt => {
    setMessageText(evt.target.value)
  }

  const onButtonAdded = text => {
    const newButton = createNewButton(text)

    return setButtons([...buttons, newButton])
  }
  return (
    <div className='container'>
      <header className='header'>
        <h1>Social Form</h1>
      </header>
      <Messenger messageText={messageText} buttons={buttons} />
      <Form onMessageChange={onMessageChange} onButtonAdded={onButtonAdded} />
    </div>
  )
}

export { App }
