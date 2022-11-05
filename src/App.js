import Input from './components/Input/Input.Component';
import './App.css';
import Todo from './components/Todo/Todo.Component';

function App() {
  return (
    <div className="App">
      <h1>Todo List</h1>
      <Input></Input>
      <Todo todo="Saat 17:30'da Bursa için yola çıkılacak."></Todo>
      <Todo todo="Saat 17:30'da Bursa için yola çıkılacak."></Todo>
      <Todo todo="Saat 17:30'da Bursa için yola çıkılacak."></Todo>

    </div>
  );
}

export default App;
