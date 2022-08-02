import './keyboard-switch.css'

const KeyboardSwitch = ({ onKeyboardChange }) => {
  return (
    <div className='main__keyboard-switch-wrap'>
      <span>Стандартная клавиатура</span>
      <label className='keyboard-switch' onChange={onKeyboardChange}>
        <input type='checkbox' />
        <span className='slider'></span>
      </label>
      <span>Inline-клавиатура</span>
    </div>
  )
}

export { KeyboardSwitch }
