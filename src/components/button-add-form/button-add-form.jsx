import { useState } from 'react'

const ButtonAddForm = ({ onButtonAdded }) => {
  const [formValue, setFormValue] = useState('')

  const onSubmit = evt => {
    evt.preventDefault()
    onButtonAdded(formValue)
    setFormValue('')
  }

  const onLabelChange = evt => {
    setFormValue(evt.target.value)
  }

  return (
    <form className='main__add-form' onSubmit={onSubmit}>
      <input
        type='text'
        className='main__add-form-control'
        value={formValue}
        onChange={onLabelChange}
        placeholder={'Добавьте кнопку'}
      />

      <button type='submit' className='btn add-form__button'></button>
    </form>
  )
}

export { ButtonAddForm }
