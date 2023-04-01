import {useState} from 'react';
import './ItensList.css';
import Itens from '../Itens/Itens';
import ItensForm from '../ItensForm/ItensForm';

const ItensList = () => {
    const [tarefas, setTarefas] = useState([]);
    const addItens = (tarefaTextChildren) => {
        setTarefas([...tarefas, tarefaTextChildren])
    }

    return(
        <section className = "itenslist">
            <h2 className = "itens-title">Minha Lista de Compras</h2>
            <ItensForm onAdd = {addItens}/>
            <ol className = "itens">
            {tarefas.map((tarefa, index) => (
                <Itens tarefa = {tarefa} key = {index}/>
            ))}
            </ol>
        </section>
    )
}

export default ItensList;