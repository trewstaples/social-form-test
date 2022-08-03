import { buttonClassnames } from '../button-add/button-add'

const ButtonsListItem = ({ btn }) => {
  const buttonMarkup =
    btn.type === buttonClassnames.classic ? (
      <button type='button' className={`btn ${btn.type}`}>
        {btn.value}
      </button>
    ) : (
      <a href={btn.value} className='btn btn-primary'>
        Перейти по ссылке
      </a>
    )

  return buttonMarkup
}

export { ButtonsListItem }
