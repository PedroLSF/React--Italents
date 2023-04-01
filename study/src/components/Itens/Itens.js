import './Itens.css';

const Itens = ({tarefa}) => {
    return (
        <li className = "itensLI">
            <input type = "checkbox" className = "input"/>
            {tarefa}
        </li>
    )
}

export default Itens;