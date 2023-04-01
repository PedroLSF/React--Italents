import { useState } from "react";

const TodoForm = ({onAdd}) => {
    const [tarefaText, setTarefasText] = useState('');
    const handleChange = (event) => {
        setTarefasText(event.target.value)
    }
    const handleSubmit = (event) =>{
        event.preventDefault();
        onAdd(tarefaText)
        setTarefasText('');
    }
    
    return (
        <form className="itens-register" onSubmit={handleSubmit}>
            <label htmlFor = 'tarefa'>Produto: </label>
            <input type = "text" id = "tarefa" placeholder='Digite seu Produto' value = {tarefaText} onChange={handleChange}/>
            <button type="submit">Adicionar</button>
        </form>
    )
}

export default TodoForm