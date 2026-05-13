import {useState} from 'react'
import './index.css'

const TodoItem = ({userDetails, listDelete, onEditedItems}) => {
  const {title, id} = userDetails

  const [edit, setEdit] = useState(false)
  const [newItems, setNewItems] = useState(userDetails.title)

  const onEdit = () => {
    setEdit(!edit)
  }

  const onChangeItems = event => {
    setNewItems(event.target.value)
  }

  const onDelete = () => {
    listDelete(id)
  }

  const onSave = () => {
    onEditedItems(id, newItems)
    setEdit(false)
  }

  return (
    <li className="bg-container">
      {edit ? (
        <>
          <input type="text" value={newItems} onChange={onChangeItems} />
          <button type="button" className="btn" onClick={onSave}>
            Save
          </button>
        </>
      ) : (
        <>
          <p className="heading-item">{title}</p>
          <button type="button" className="btn" onClick={onEdit}>
            Edit
          </button>
        </>
      )}

      <button type="button" className="btn" onClick={onDelete}>
        Delete
      </button>
    </li>
  )
}

export default TodoItem
