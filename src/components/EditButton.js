import React, { useEffect, useRef, useState } from "react";

const EditButton = ({ editTask }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [taskName, setTaskName] = useState("");

  const formRef = useRef(null);

  const handleFormBlur = (e) => {
    if (!formRef?.current?.contains(e.target)) {
      setIsEditing(false);
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleFormBlur);
    return () => document.removeEventListener("mousedown", handleFormBlur);
  }, []);

  const handleFormSubmit = (e) => {
    e.preventDefault();
    if (!taskName) {
      return;
    }
    editTask(taskName);
    setIsEditing(false);
  };

  return (
    <div className="action-cell">
      <button
        className="action-button"
        onClick={() => setIsEditing(true)}
      >
        Edit
      </button>
      {isEditing && (
        <form
          className="form-edit-task"
          onSubmit={handleFormSubmit}
          ref={formRef}
        >
          <input
            type="text"
            name="taskName"
            value={taskName}
            onChange={(e) => setTaskName(e.target.value)}
          />
          <button disabled={!taskName}>Done</button>
        </form>
      )}
    </div>
  );
};

export default EditButton;
