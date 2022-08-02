import { Form } from '../form'

const App = () => {
  return (
    <div className='container'>
      <header className='header'>
        <h1>Social Form</h1>
      </header>
      <Form />
    </div>
  )
}

export { App }

//Попробовать добавить кнопки в textarea
//Написать логику. Если выбрано отображение standard, то кнопки добавляются снизу от textarea.
//Если выбрано отображение inline, то кнопки добавляются в саму textarea
