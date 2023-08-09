import { TodoCounter } from './TodoCounter';
import { TodoItem } from './TodoItem';
import { TodoSearch } from './TodoSearch';
import { TodoList } from './TodoList';
import { CreateTodoButton } from './CreateTodoButton'; 
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


function useLocalStorage(itemName, initialValue) {
  
  const localStorageItem = localStorage.getItem(itemName);
  let parsedItem;

  if (!localStorageItem) {
    localStorage.setItem(itemName, JSON.stringify(initialValue) );
    parsedItem=initialValue;
  }else {
    parsedItem = JSON.parse(localStorageItem);
  }

  const [item, setItems] = React.useState(parsedItem);

  const saveItem = (newItem) => {
    localStorage.setItem(itemName, JSON.stringify(newItem));
    setItems(newItem);
  };

  return [item, saveItem] ;

}


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
    <>
      <TodoCounter completed={completedTodos} total={totalTodos} />
      <TodoSearch 
        searchValue={searchValue}
        setSearchValue = {setSearchValue}
      />

      <TodoList>
        {searchedTodos.map(todo => (
            <TodoItem key={todo.text} 
            text={todo.text} 
            completed={todo.completed} 
            onComplete={() => completeTodo(todo.text)}
            onDelete={() => deleteTodo(todo.text)}
            />
        ))}        
      </TodoList>

      <CreateTodoButton />
    </>
  );
}





export default App;
