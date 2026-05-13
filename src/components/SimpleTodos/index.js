import {Component} from 'react'
import TodoItem from '../TodoItem'
import './index.css'

const initialTodosList = [
  {
    id: 1,
    title: 'Book the ticket for today evening',
  },
  {
    id: 2,
    title: 'Rent the movie for tomorrow movie night',
  },
  {
    id: 3,
    title: 'Confirm the slot for the yoga session tomorrow morning',
  },
  {
    id: 4,
    title: 'Drop the parcel at Bloomingdale',
  },
  {
    id: 5,
    title: 'Order fruits on Big Basket',
  },
  {
    id: 6,
    title: 'Fix the production issue',
  },
  {
    id: 7,
    title: 'Confirm my slot for Saturday Night',
  },
  {
    id: 8,
    title: 'Get essentials for Sunday car wash',
  },
]

class App extends Component {
  state = {userListDetails: initialTodosList, addedList: ''}

  listDelete = id => {
    const {userListDetails} = this.state
    const filterList = userListDetails.filter(each => each.id !== id)

    this.setState({userListDetails: filterList})
  }

  onChangeList = event => {
    this.setState({addedList: event.target.value})
  }

  onSubmitList = event => {
    event.preventDefault()
    const {addedList, userListDetails} = this.state
    const newItems = {
      id: userListDetails.length + 1,
      title: addedList,
    }
    this.setState(prevState => ({
      userListDetails: [...prevState.userListDetails, newItems],
      addedList: '',
    }))
  }

  onEditedItems = (id, newItems) => {
    this.setState(prevState => ({
      userListDetails: prevState.userListDetails.map(each =>
        each.id === id ? {...each, title: newItems} : each,
      ),
    }))
  }

  render() {
    const {userListDetails, addedList} = this.state
    return (
      <div className="container-bg-style">
        <div className="bg-container-style">
          <h1 className="heading-container">Simple Todos</h1>
          <form onSubmit={this.onSubmitList}>
            <input value={addedList} onChange={this.onChangeList} />
            <button type="submit">Add</button>
          </form>
          <ul>
            {userListDetails.map(eachItem => (
              <TodoItem
                userDetails={eachItem}
                key={eachItem.id}
                listDelete={this.listDelete}
                onEditedItems={this.onEditedItems}
              />
            ))}
          </ul>
        </div>
      </div>
    )
  }
}

export default App
