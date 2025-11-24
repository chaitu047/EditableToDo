import { useState } from "react";
import Task from "./Task";

export default function EditableToDo() {
  const [tasks, setTasks] = useState([]);
  const [value, setValue] = useState("");

  const handleEdit = (id, newValue) => {
    setTasks((prev) => {
      let deepClone = JSON.parse(JSON.stringify(prev));
      deepClone = deepClone.map((task) => {
        if (task.id === id) {
          console.log(id);
          return { ...task, value: newValue };
        }
        return task;
      });
      return deepClone;
    });
  };

  const handleTask = () => {
    if (!value) return;
    const id = Date.now();
    setTasks((prev) => {
      const copyArr = [...prev, { id: id, value: value, status: "todo" }];
      return copyArr;
    });
    setValue("");
  };

  const deleteTask = (id) => {
    setTasks((prev) => {
      let deepClone = JSON.parse(JSON.stringify(prev));
      deepClone = deepClone.filter((task) => task.id != id);
      return deepClone;
    });
  };

  return (
    <div className="todo-container">
      <div className="input-container">
        <input
          type="text"
          value={value}
          onChange={(e) => setValue(e.target.value)}
        />
        <button onClick={handleTask}>add task</button>
      </div>
      <div className="tasks-container">
        {tasks &&
          tasks.map((task, i) => {
            return (
              <Task
                key={i}
                task={task}
                handleEdit={handleEdit}
                deleteTask={deleteTask}
              />
            );
          })}
      </div>
    </div>
  );
}
