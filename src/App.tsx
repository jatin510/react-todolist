import TodoList from './components/TodoList';
import './App.css';
import { ThemeProvider } from './contexts/ThemeContext';
import { TodoProvider } from './contexts/TodoContext';

function App() {
  return (
    <div className="App">
      <p>Todolist </p>
      <TodoList />
    </div>
  );
}

function AppContainer() {
  return (
    <ThemeProvider>
      <TodoProvider>
        <App />
      </TodoProvider>
    </ThemeProvider>
  );
}

export default AppContainer;
