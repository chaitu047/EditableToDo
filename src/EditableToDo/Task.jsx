import { useState } from "react";

export default function Task({ task, handleEdit, deleteTask }) {
  const { value, id, status } = task;
  const [newValue, setNewValue] = useState("");
  const [edit, setEdit] = useState(false);
  const editHandler = () => {
    setEdit(true);
  };
  return (
    <div className="task">
      <div>
        {edit ? (
          <span>
            <input
              type="text"
              value={newValue}
              onChange={(e) => setNewValue(e.target.value)}
            />
            <span
              onClick={() => {
                handleEdit(id, newValue);
                setEdit(false);
              }}
            >
              ✔
            </span>
          </span>
        ) : (
          value
        )}
      </div>
      {!edit && (
        <div className="actions">
          <span>✔</span>
          <span onClick={editHandler}>🖊️</span>
          <span onClick={() => deleteTask(id)}>✖</span>
        </div>
      )}
    </div>
  );
}
