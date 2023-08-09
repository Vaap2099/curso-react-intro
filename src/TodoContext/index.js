import React from 'react';
import { useLocalStorage } from './useLocalStorage';


const TodoContext = React.createContext();


function TodoProvider () {
    const {
        item: todos,
        saveItem: saveTodos,
        loading,
        error,
    } = useLocalStorage('TODOS_V1', []);

    const [searchValue, setSearchValue] = React.useState('');

    const completedTodos = todos.filter(
        todo => !!todo.completed        
    ).lenght;

    const searchedTodos = todos.filter(
        (todo)=> {
            const todoText = todo.text.toLowerCase();
            const searchText = searchValue.toLowerCase
        }
    )

    return (
        <TodoContext.Provider>

        </TodoContext.Provider>
    )
}

function TodoConsumer() {
    return (
        <TodoContext.Consumer>

        </TodoContext.Consumer>
    )
}




export {TodoContext, TodoProvider, TodoConsumer}