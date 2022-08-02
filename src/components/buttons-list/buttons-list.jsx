const ButtonsList = ({ buttons }) => {
  const elements = buttons.map(btn => {
    return (
      <button type='button' className={'btn'} key={btn.value}>
        {btn.value}
      </button>
    )
  })

  return <div className='messenger__buttons'>{elements}</div>
}

export { ButtonsList }
