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

// Write your code here

class SimpleTodos extends Component {
  state = {todoList: initialTodosList}

  deleteTodo = id => {
    const {todoList} = this.state
    const updatedTodoList = todoList.filter(eachItem => eachItem.id !== id)

    this.setState({todoList: updatedTodoList})
  }

  render() {
    const {todoList} = this.state
    return (
      <div className="bg-container">
        <div className="main-card-container">
          <h1 className="heading"> Simple Todos </h1>
          {todoList.length !== 0 ? (
            <ul className="list-container">
              {todoList.map(eachItem => (
                <TodoItem
                  key={eachItem.id}
                  todoDetails={eachItem}
                  deleteTodo={this.deleteTodo}
                />
              ))}
            </ul>
          ) : (
            <p className="empty-item"> Empty Todos</p>
          )}
        </div>
      </div>
    )
  }
}

export default SimpleTodos
