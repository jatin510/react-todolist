import { useContext, useState } from 'react';
import TodoList from './components/TodoList';
import './App.css';
import { ThemeContext, ThemeProvider } from './contexts/ThemeContext';

function App() {
  const [count, setCount] = useState(0);

  const value = useContext(ThemeContext);
  return (
    <div className="App">
      <TodoList />
    </div>
  );
}

function AppContainer() {
  return (
    <ThemeProvider>
      <App />
    </ThemeProvider>
  );
}

export default AppContainer;
