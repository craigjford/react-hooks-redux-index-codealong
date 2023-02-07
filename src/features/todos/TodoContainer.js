import React from "react";
import Todo from './Todo';
import { useSelector } from "react-redux";

function TodoContainer() {

  const todos = useSelector((state) => state.todos.entities)

  const todoList = todos.map((todo, idx) => <Todo key={idx} todo={todo} />);

  return (
    <div>
      <ul>
        {todoList}
      </ul>
    </div>
  );
}

export default TodoContainer;
