const TodoItem = ({tarefa}) => {
    return (
        <li className = "todo-items">
            <input type = "checkbox"/>
            {tarefa}
        </li>
    )
}

export default TodoItem;