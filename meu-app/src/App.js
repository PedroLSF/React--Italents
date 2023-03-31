import './App.css';
import Welcome from './components/Welcome/Welcome';
import TodoList from './components/TodoList/TodoList';

function App() {
  return (
    <div className="App">
      <Welcome nome = "Pedro Lucas"/>
        <p className = "app-text">Itens para a compra mensal</p>
      <TodoList/>
    </div>
  );
}

export default App;
