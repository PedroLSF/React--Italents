import './Welcome.css';

function Welcome({nome}){
    //const nome = props.nome;

    return(
        <div>
            <h1>Lista de Compras - {nome}</h1>
            <h2 className="sub">Adicione aqui os seus produtos</h2>
        </div>
    )
}
export default Welcome;