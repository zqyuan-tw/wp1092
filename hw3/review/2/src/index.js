import React from "react";
import ReactDOM from "react-dom";
import './styles.css';
import TodoApp from "./containers/TodoApp";

ReactDOM.render(
    <TodoApp className="todo-app__root" />,
    document.getElementById("root")
);
