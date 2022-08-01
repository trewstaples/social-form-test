const ButtonsList = ({ buttons }) => {
  const elements = buttons.map(btn => {
    return (
      <button type='button' key={btn.value}>
        {btn.value}
      </button>
    )
  })

  return <div className='main__buttons'>{elements}</div>
}

export { ButtonsList }
