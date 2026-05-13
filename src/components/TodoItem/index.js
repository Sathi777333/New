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
          <div className="display-view-input">
            <input
              className="input-heading"
              type="text"
              value={newItems}
              onChange={onChangeItems}
            />
          </div>
          <button type="button" className="btn-save-button" onClick={onSave}>
            Save
          </button>
        </>
      ) : (
        <>
          <div className="display-view-input">
            <label className="label">
              <input type="checkbox" className="heading" value={title} />
              <span>{title}</span>
            </label>
          </div>
          <button type="button" className="btn-edit-button" onClick={onEdit}>
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
