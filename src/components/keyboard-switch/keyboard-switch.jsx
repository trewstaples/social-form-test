const KeyboardSwitch = ({ onKeyboardChange }) => {
  return (
    <div className='main__switch-button-wrap'>
      <span>Standard</span>
      <label className='switch' onChange={onKeyboardChange}>
        <input type='checkbox' />
        <span className='slider'></span>
      </label>
      <span>Inline</span>
    </div>
  )
}

export { KeyboardSwitch }
