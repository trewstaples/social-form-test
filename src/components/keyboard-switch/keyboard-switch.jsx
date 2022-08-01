import './keyboard-switch.css'

const KeyboardSwitch = ({ onKeyboardChange }) => {
  return (
    <div className='main__keyboard-switch-wrap'>
      <span>Standard</span>
      <label className='keyboard-switch' onChange={onKeyboardChange}>
        <input type='checkbox' />
        <span className='slider'></span>
      </label>
      <span>Inline</span>
    </div>
  )
}

export { KeyboardSwitch }
