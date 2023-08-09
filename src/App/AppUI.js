import { TodoCounter } from '../TodoCounter';
import { TodoItem } from '../TodoItem';
import { TodoSearch } from '../TodoSearch';
import { TodoList } from '../TodoList';
import { CreateTodoButton } from '../CreateTodoButton'; 
import React from "react";

function AppUI ({
    loading,
    error,
    completedTodos,
    totalTodos,
    searchValue, 
    setSearchValue,
    searchedTodos,
    completeTodo,
    deleteTodo,

}) {
    return (<>
      <TodoCounter completed={completedTodos} total={totalTodos} />
      <TodoSearch 
        searchValue={searchValue}
        setSearchValue = {setSearchValue}
      />

      <TodoList>
        {loading && <p>Estamos cargando...</p>}
        {error && <p>Error en el sistema</p>}
        {!loading && (searchedTodos.length <= 0 && <p>Crea tu primer TODO</p> ) }
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
    )
}

export {AppUI};