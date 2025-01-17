import React from "react";
import { TodoCounter } from "../TodoCounter";
import { TodoSearch } from "../TodoSearch";
import { TodoList } from "../TodoList";
import { TodoItem } from "../TodoItem";
import { TodosLoading } from "../TodosLoading";
import { TodosError } from "../TodosError";
import { EmtyTodos } from "../EmtyTodos";
import { CreateTodoButton } from "../TodoButton";
import { TodoContext } from "../TodoContext";
import { Modal } from "../Modal";
import { TodoForm } from "../TodoForm";
import { TodoCategory } from "../TodoCategory";

function AppUI() {
  const {
    loading,
    error,
    searchedTodos,
    searchedCategories,
    completeTodo,
    deleteTodo,
    openModal,
    setOpenModal,
  } = React.useContext(TodoContext);

  return (
    <>
      <TodoCounter />
      <TodoSearch />

      <TodoCategory />

      <TodoList>
        {loading && <TodosLoading />}
        {console.log("loading" + loading)}
        {error && <TodosError />}
        {!loading && searchedTodos.length === 0 && <EmtyTodos />}
        {!loading &&
          searchedCategories.length >= 1 &&
          searchedCategories.map((todo) => (
            <TodoItem
              key={todo.text}
              text={todo.text}
              category={todo.category}
              completed={todo.completed}
              onComplete={() => completeTodo(todo.text)}
              onDelete={() => deleteTodo(todo.text)}
            />
          )) || searchedCategories === 'Categoria' || searchedTodos.map((todo) => (
            <TodoItem
              key={todo.text}
              text={todo.text}
              category={todo.category}
              completed={todo.completed}
              onComplete={() => completeTodo(todo.text)}
              onDelete={() => deleteTodo(todo.text)}
            />
          ))}
        {!loading &&
          searchedTodos.length === 0 &&
          searchedCategories === 0 &&
          searchedTodos.map((todo) => (
            <TodoItem
              key={todo.text}
              text={todo.text}
              category={todo.category}
              completed={todo.completed}
              onComplete={() => completeTodo(todo.text)}
              onDelete={() => deleteTodo(todo.text)}
            />
          ))}
        {console.log("Categorias buscadas " + searchedCategories)}
        {console.log("Todos buscados " + searchedTodos)}

        {/* {searchedTodos.map((todo) => (
          <TodoItem
            key={todo.text}
            text={todo.text}
            category={todo.category}
            completed={todo.completed}
            onComplete={() => completeTodo(todo.text)}
            onDelete={() => deleteTodo(todo.text)}
          />
        ))} */}
      </TodoList>

      <CreateTodoButton />

      {openModal && (
        <Modal>
          <TodoForm />
        </Modal>
      )}
    </>
  );
}
export { AppUI };
