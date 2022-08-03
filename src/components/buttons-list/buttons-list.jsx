import { nanoid } from 'nanoid'

import { ButtonsListItem } from '../buttons-list-item'

const ButtonsList = ({ buttons }) => {
  const elements = buttons.map(btn => {
    return <ButtonsListItem btn={btn} key={nanoid()} />
  })

  return <div className='messenger__buttons'>{elements}</div>
}

export { ButtonsList }
