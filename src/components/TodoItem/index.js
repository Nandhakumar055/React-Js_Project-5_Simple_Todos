import './index.css'

const TodoItem = props => {
  const {todoDetails, deleteTodo} = props
  const {id, title} = todoDetails

  const onClickDelete = () => {
    deleteTodo(id)
  }

  return (
    <li className="todo-item-container">
      <p className="todo-title">{title}</p>
      <button className="dltButton" type="button" onClick={onClickDelete}>
        Delete
      </button>
    </li>
  )
}

export default TodoItem
