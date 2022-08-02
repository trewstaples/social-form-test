const ButtonsList = ({ buttons, currentButtonPosition }) => {
  // const buttonStyle = currentButtonPosition
  //   ? {
  //       float: 'left',
  //       width: '40px',
  //       height: '40px',
  //       margin: '5px',
  //       position: 'relative',
  //     }
  //   : {}

  const elements = buttons.map(btn => {
    return (
      <button type='button' className={'btn'} key={btn.value}>
        {btn.value}
      </button>
    )
  })

  return <div className='main__buttons'>{elements}</div>
}

export { ButtonsList }
