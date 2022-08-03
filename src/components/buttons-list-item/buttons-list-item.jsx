import { buttonClassnames } from '../button-add/button-add'

const ButtonsListItem = ({ btn }) => {
  const buttonLayout =
    btn.type === buttonClassnames.classic ? (
      <button type='button' className={`btn ${btn.type}`}>
        {btn.value}
      </button>
    ) : (
      <a href={btn.value} className='btn btn-primary'>
        Перейти по ссылке
      </a>
    )

  return buttonLayout
}

export { ButtonsListItem }
