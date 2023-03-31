import './Welcome.css';

function Welcome({nome}){
    //const nome = props.nome;

    return(
        <div>
            <h1>Lista de Compras de {nome}</h1>
            <h2>Adicione aqui os seus produtos</h2>
        </div>
    )
}
export default Welcome;