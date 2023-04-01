import './App.css';
import Welcome from './components/Welcome/Welcome';
import ItensList from './components/ItensList/ItensList';

function App() {
  return (
    <div className="App">
      <Welcome nome = "Pedro Lucas"/>
        <p className = "app-text">
          1. Escreva o nome do Item
          <br></br>
          2. Clique em Adicionar
          </p>
      <ItensList/>
    </div>
  );
}

export default App;
