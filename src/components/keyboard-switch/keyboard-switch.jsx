import './keyboard-switch.css'

const KeyboardSwitch = ({ onKeyboardChange }) => {
  return (
    <div className='form__keyboard-switch-wrapper'>
      <span>Стандартная клавиатура</span>
      <label className='form__keyboard-switch' onChange={onKeyboardChange}>
        <input type='checkbox' />
        <span className='slider'></span>
      </label>
      <span>Inline-клавиатура</span>
    </div>
  )
}

export { KeyboardSwitch }
