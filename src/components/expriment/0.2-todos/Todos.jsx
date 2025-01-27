import React, { useEffect, useState } from "react";
import { v4 as uuidv4 } from "uuid";
import { FaTrashCan } from "react-icons/fa6";
import styles from "./Todos.module.css";

const dummyTodos = [
  {
    id: uuidv4(),
    title: "Dummy todo one",
    details: "Lorem ipsum dolor sit amet consectetur, adipisicing elit.",
  },
];

const Todos = () => {
  const [newTodo, setNewTodo] = useState({ title: "", details: "" });
  const [todos, setTodos] = useState(dummyTodos);
  const [success, setSuccess] = useState(false);
  const [err, setErr] = useState(null);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewTodo((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!newTodo.title.trim() || !newTodo.details.trim()) {
      setErr("Please provide the name and details");
      return;
    }
    const todoWithId = { id: uuidv4(), ...newTodo };
    setTodos((prev) => [...prev, todoWithId]);
    setSuccess(true);
    setNewTodo({ title: "", details: "" });
  };

  useEffect(() => {
    if (!success && !err) return;
    const validationTimeout = setTimeout(() => {
      setErr(null);
      setSuccess(false);
    }, 2000);
    return () => clearTimeout(validationTimeout);
  }, [success, err]);

  const handleDelete = (itemId) => {
    setTodos((prev) => prev.filter((todo) => todo.id !== itemId));
  };

  return (
    <div className={styles["container"]}>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="title"
          placeholder="Todo Title"
          value={newTodo.title}
          onChange={handleInputChange}
        />
        <input
          type="text"
          name="details"
          placeholder="Your details"
          value={newTodo.details}
          onChange={handleInputChange}
        />
        {success && (
          <p className={styles["success"]}>New todo added successfully!</p>
        )}
        {err && <p className={styles["warning"]}>{err}</p>}
        <button type="submit">Create Todo</button>
      </form>
      <div className={styles["todos-container"]}>
        {todos.length > 0 ? (
          todos.map((todo) => (
            <div key={todo.id} className={styles["todo-wrapper"]}>
              <div className={styles["todos"]}>
                <h3>{todo.title}</h3>
                <p>{todo.details}</p>
              </div>
              <div
                className={styles["delete-todo"]}
                title="Are you sure?"
                onClick={() => handleDelete(todo.id)}
              >
                <FaTrashCan />
              </div>
            </div>
          ))
        ) : (
          <h3>No Todos found!</h3>
        )}
      </div>
    </div>
  );
};

export default Todos;
