import './index.css'

const TodoItem = props => {
  const {userDetails, listDelete} = props
  const {title, id} = userDetails

  const onDelete = () => {
    listDelete(id)
  }

  return (
    <li className="bg-container">
      <p className="heading-item">{title}</p>
      <button type="button" className="btn" onClick={onDelete}>
        Delete
      </button>
    </li>
  )
}

export default TodoItem
