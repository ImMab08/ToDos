import { TodoItem } from "../Components/TodoItem";
import { TodoCounter } from "../Components/TodoCounter";
import { TodoSearch } from "../Components/TodoSearch";
import { TodoList } from "../Components/TodoList";
import { CreateTodoButton } from "../Components/CreateTodoButton";

import "./Section.css";
import React from "react";

const defaultTodos = [
  { text: "Cortar cebolla", completed: true },
  { text: "Todasdddd React", completed: false },
  { text: "xasdlorona", completed: true },
  { text: "xdsssddddd", completed: false },
  { text: "TomaasdasReact", completed: false },
  { text: "Lladsasda la llorona", completed: true },
  { text: "xdddddddddddd", completed: true },
  { text: "Tomar curso React", completed: true },
  { text: "Llorar con la llorona", completed: true },
  { text: "xddddddwwwddddddd", completed: true },
  { text: "xddsadddddddd", completed: true },
  { text: "lorem", completed: true },
];

function Section() {
  const [todos, setTodos] = React.useState(defaultTodos);

  const [searchValue, setSearchValue] = React.useState("");

  const searchedTodos = todos.filter(
    (todo) => {
      const todoText = todo.text.toLowerCase();
      const searchText = searchValue.toLocaleLowerCase();

      return todoText.includes(searchText);
    }
  );

  const completedTodos = todos.filter (todo => !!todo.completed).length;
  const totalTodos = todos.length;

  const completeTodos = (text) => {
    const newTodos = [...todos];
    const todoIndex = newTodos.findIndex((todo) => todo.text === text);

    newTodos[todoIndex].completed = !newTodos[todoIndex].completed;
    setTodos(newTodos);
  }
  const deleteTodos = (text) => {
    const newTodos = [...todos];
    const todoIndex = newTodos.findIndex((todo) => todo.text === text);

    newTodos.splice(todoIndex, 1);
    setTodos(newTodos);
  }

  return (
    <>
      <section className="section">
        <h1 className="section-title">ToDo's</h1>

        <div className="container-main">
          <div className="container-task">
            <h2 className="title-tareas">Tareas</h2>
            <div className="TodoSearch-container">
              <TodoSearch 
                searchValue = {searchValue}
                setSearchValue = {setSearchValue}
              />
            </div>

            <div className="TodoList-container">
              <TodoList>
                {searchedTodos.map((todo) => (
                  <TodoItem
                    key={todo.text}
                    text={todo.text}
                    completed={todo.completed}
                    onComplete = {() => completeTodos(todo.text)}
                    onDelete = {() => deleteTodos(todo.text)}
                  />
                ))}
              </TodoList>
            </div>
          </div>

          <div className="container-progress">
            <h2 className="title-progress">Progreso</h2>
            <div className="progress">
              hola xd
            </div>
            <div className="data-progress">
              <TodoCounter 
                  completed={completedTodos} 
                  total={totalTodos} 
                  />
            </div>
          </div>

        </div>

        <div className="TodoButton-container">
          <CreateTodoButton />
        </div>
      </section>
    </>
  );
}

export { Section };
