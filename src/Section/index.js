import { TodoItem } from "../Components/TodoItem";
import { TodoCounter } from "../Components/TodoCounter";
import { TodoSearch } from "../Components/TodoSearch";
import { TodoList } from "../Components/TodoList";
import { CreateTodoButton } from "../Components/CreateTodoButton";

import "./Section.css";
import React from "react";

const defaultTodos = [
  { text: "Cortar cebolla", completed: true },
  { text: "Tomar curso React", completed: false },
  { text: "Llorar con la llorona", completed: true },
  { text: "xdddddddddddd", completed: false },
  { text: "Tomar curso React", completed: false },
  { text: "Llorar con la llorona", completed: true },
  { text: "xdddddddddddd", completed: false },
  { text: "Tomar curso React", completed: false },
  { text: "Llorar con la llorona", completed: true },
  { text: "xdddddddddddd", completed: false },
];

function Section() {
  return (
    <React.Fragment>
      <section className="section">
        <h1 className="section-title">ToDo's</h1>

        <div className="container-main">
          <div className="container-task">
            <h2 className="title-tareas">Tareas</h2>
            <div className="TodoSearch-container">
              <TodoSearch />
            </div>

            <div className="TodoList-container">
              <TodoList>
                {defaultTodos.map((todo) => (
                  <TodoItem
                    key={todo.text}
                    text={todo.text}
                    completed={todo.completed}
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
                  completed={8} 
                  total={16} 
                  />
            </div>
          </div>

        </div>

        <div className="TodoButton-container">
          <CreateTodoButton />
        </div>
      </section>
    </React.Fragment>
  );
}

export { Section };
