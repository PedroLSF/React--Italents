import { useState } from "react";

const TodoForm = ({onAdd}) => {
    const [tarefaText, setTarefasText] = useState('');
    const handleChange = (event) => {
        setTarefasText(event.target.value)
    }
    const handleSubmit = (event) =>{
        event.preventDefault();
        // setTarefas([...tarefas, tarefaText]);
        onAdd(tarefaText)
        setTarefasText('');
    }
    
    return (
        <form className="todo-register" onSubmit={handleSubmit}>
            <label htmlFor = 'tarefa'>Produto: </label>
            <input type = "text" id = "tarefa" placeholder='Digite seu Produto' value = {tarefaText} onChange={handleChange}/>
            <button type="submit">Enviar</button>
        </form>
    )
}

export default TodoForm