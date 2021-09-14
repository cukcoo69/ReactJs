import React, { Fragment, useState } from "react";
import TodoItem from "./TodoItem";
import AddTodo from './AddTodo'

const Todos = () => {
    const [todoState, setTodoState] = useState([
      {
        id: 1,
        title: 'Todo 1',
        completed: false
      },
      {
        id: 2,
        title: 'Todo 2',
        completed: false
      },
      {
        id: 3,
        title: 'Todo 3',
        completed: false
      }
    ]);

    const markComplete = (id) => {
      const newTodoItem = todoState.map(todo => {
        if (todo.id === id) {
          todo.completed = !todo.completed;
        }
        return todo
      })
      console.log(`mark item ${id}`)
      setTodoState(newTodoItem);
    }

    const deleteItem = (id) => {
      const newTodoes = todoState.filter(todo => todo.id !== id);
      console.log(`delete item id: ${id}`);
      setTodoState(newTodoes);
    }

  return (
    <Fragment>
        <AddTodo />
        {todoState.map(todo => {
          return <TodoItem
          todoes={todo}
          markCompleteFunc={markComplete}
          deleteFunc={deleteItem}
          key={todo.id} />
        })};
    </Fragment>
  );
};

export default Todos;