import { TodoCounter } from '../TodoCounter';
import { TodoItem } from '../TodoItem';
import { TodoSearch } from '../TodoSearch';
import { TodoList } from '../TodoList';
import { CreateTodoButton } from '../CreateTodoButton'; 
import {TodosLoading} from '../TodosLoading';
import {TodosError} from '../TodosError';
import {EmptyTodos} from '../EmptyTodos';
import { TodoContext } from '../TodoContext';
import React from "react";

function AppUI (
    
) {
    return (<>
      <TodoCounter  />
      <TodoSearch  />
    <TodoContext.Consumer>
        { ({
          loading,
          error,
          searchedTodos,
          completeTodo,
          deleteTodo,
        }) => (
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
        )

        }
    </TodoContext.Consumer>

      <CreateTodoButton />
    </>
    )
}

export {AppUI};