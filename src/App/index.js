import { useLocalStorage } from './useLocalStorage';
import {AppUI} from './AppUI';
import React from 'react';



// const defaultTodos = [
//   {
//     text: 'Cortar Cebolla', completed: true
//   },
//   {text: 'Tomar el curso de introduccion a React', completed: false},
//   {text: 'Darle de comer al perro', completed: false},
//   {text: 'Hacer almuerzo', completed: true},
//   {text: 'Dormir la siesta', completed: false},
//   {text: 'Completar otro curso', completed: false},
//   {text: 'Usar estados derivados', completed: true},
// ];

// localStorage.setItem('TODOS_V1', JSON.stringify( defaultTodos));

// localStorage.removeItem('TODOS_V1');




function App() {
  

  
  const [todos, saveTodos] = useLocalStorage('TODOS_V1', []);
  const [searchValue, setSearchValue] = React.useState('');

  const completedTodos = todos.filter(todo => !!todo.completed).length;
  const totalTodos=todos.length;

  const searchedTodos = todos.filter((todo) => {
    const todoText = todo.text.toLowerCase();
    const searchText = searchValue.toLowerCase();
    return todoText.includes(searchText);
  }
  );



  const completeTodo = (text) => {
    const newTodos = [...todos];
    const todoIndex = newTodos.findIndex(
      (todo) => todo.text === text
    );
    newTodos[todoIndex].completed = true;
    saveTodos(newTodos);
  }

  const deleteTodo =(text) => {
    const newTodos = [...todos];
    const todoIndex = newTodos.findIndex(
      (todo) => todo.text === text
    );
    newTodos.splice(todoIndex, 1);
    saveTodos(newTodos);
  }

  console.log ('Los usuarios buscan TODOs de '+searchValue)
 

  return (
    <AppUI 
      completedTodos={completedTodos}
      totalTodos={totalTodos}
      searchValue={searchValue}
      setSearchValue={setSearchValue}
      searchedTodos={searchedTodos}
      completeTodo={completeTodo}
      deleteTodo={deleteTodo}
  
  
    />
  )
}





export default App;
