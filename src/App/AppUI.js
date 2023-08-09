import { TodoCounter } from '../TodoCounter';
import { TodoItem } from '../TodoItem';
import { TodoSearch } from '../TodoSearch';
import { TodoList } from '../TodoList';
import { CreateTodoButton } from '../CreateTodoButton'; 
import {TodosLoading} from '../TodosLoading'
import {TodosError} from '../TodosError'
import {EmptyTodos} from '../EmptyTodos'
import React from "react";

function AppUI ({
    // loading,
    // error,
    // completedTodos,
    // totalTodos,
    // searchValue, 
    // setSearchValue,
    // searchedTodos,
    // completeTodo,
    // deleteTodo,

}) {
    return (<>
      <TodoCounter  />
      <TodoSearch 
        
      />

      <TodoList>
        {loading && (
          <>
        <TodosLoading />
        <TodosLoading />
        <TodosLoading />
        </>
        )}

        {error && <TodosError />}
        {!loading && (searchedTodos.length <= 0 && <EmptyTodos /> ) }
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