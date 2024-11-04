import React, { useEffect, useState } from "react";
import TodoForm from "../components/Todo-list/TodoForm";
import { Box, GridItem, Text } from "@chakra-ui/react";
import { v4 as uuidv4 } from "uuid";
import Todo from "../components/Todo-list/Todo";
import Notification from "../notificatios.json";

// import EditContext from "../context/edit-context";
uuidv4();

const TodoList = () => {
  const getStoredTodos = () => {
    const json = JSON.parse(localStorage.getItem("todos"));
    if (json) {
      return json;
    }

    return [];
  };
  const [todos, setTodos] = useState(Notification);

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  const addTodo = (todo) => {
    setTodos([
      ...todos,
      { id: uuidv4(), task: todo, completed: false, isEditing: false },
    ]);
  };

  const toggleComplete = (id) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
  };

  const deleteTodo = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  // const editTodo = (id, text) => {
  //   setTodos(
  //     todos.map((todo) =>
  //       todo.id === id ? { ...todo, isEditing: !todo.isEditing } : todo
  //     )
  //   );
  // };

  return (
    <GridItem
      // colSpan={3}
      // rowSpan={14}
      bg={"#13151C"}
      borderRadius={25}
      area={"todo"}
    >
      {/* <EditContext.Provider
        value={{
          editField: todos.map((item) => {
            return item[item.isEditing] === true;
          }),
        }}
      > */}
      <TodoForm addTodo={addTodo}>
        {todos.map((todo, index) => {
          return (
            <Todo
              task={todo}
              key={index}
              toggleComplete={toggleComplete}
              deleteTodo={deleteTodo}
              // editTodo={editTodo}
            />
          );
        })}
      </TodoForm>
      {/* </EditContext.Provider> */}
    </GridItem>
  );
};

export default TodoList;
