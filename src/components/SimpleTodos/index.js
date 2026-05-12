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
  state = {userListDetails: initialTodosList}

  listDelete = id => {
    const {userListDetails} = this.state
    const filterList = userListDetails.filter(each => each.id !== id)

    this.setState({userListDetails: filterList})
  }

  render() {
    const {userListDetails} = this.state
    return (
      <div className="container-bg-style">
        <div className="bg-container-style">
          <h1 className="heading-container">Simple Todos</h1>
          <ul>
            {userListDetails.map(eachItem => (
              <TodoItem
                userDetails={eachItem}
                key={eachItem.id}
                listDelete={this.listDelete}
              />
            ))}
          </ul>
        </div>
      </div>
    )
  }
}

export default App
