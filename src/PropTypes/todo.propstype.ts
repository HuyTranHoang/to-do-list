import PropsTypes from 'prop-types'

export const TodoTypes = PropsTypes.shape({
  id: PropsTypes.string.isRequired,
  name: PropsTypes.string.isRequired,
  done: PropsTypes.bool.isRequired
})
