import React, { useState } from "react";
import Select from "react-select";
import moment from "moment/moment";
import data from "../../../data";

const getOption = (value) => ({
  value,
  label: value,
});

const users = [
  "User Name 1",
  "User Name 2",
  "User Name 3",
  "User Name 4",
  "User Name 5",
  "User Name 6",
  "User Name 7",
  "User Name 8",
  "User Name 9",
].map(getOption);

const tags = [
  "tag1",
  "tag2",
  "tag3",
  "tag4",
  "tag5",
  "tag6",
  "tag7",
  "tag8",
  "tag9",
].map(getOption);

const initialTask = {
  taskName: "",
  assignedTo: [],
  startDate: "",
  endDate: "",
  tags: [],
  followers: [],
  description: "",
};

const DATE_FORMAT = {
  long: "Do MMM YYYY",
  short: "YYYY-MM-DD",
};

const AddTask = ({ addTask }) => {
  const [task, setTask] = useState(initialTask);

  const [message, setMessage] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (Object.values(task).some((value) => value.length === 0)) {
      setMessage({
        type: "error",
        text: "Error while saving task. Some values are missing!",
      });
      return;
    }

    addTask(task);
    setMessage({
      type: "success",
      text: "Task saved succesfully!",
    });
    setTask(initialTask);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    handleChange(name, value);
  };

  const handleDateChange = (e) => {
    const { name, value } = e.target;
    const formattedValue = moment(value, DATE_FORMAT.short).format(
      DATE_FORMAT.long
    );
    handleChange(name, formattedValue);
  };

  const handleOptionChange = (name, options) => {
    handleChange(
      name,
      options.map(({ value }) => value)
    );
  };

  const handleChange = (name, value) => {
    message && setMessage(null);
    setTask((_task) => ({
      ..._task,
      [name]: value,
    }));
  };

  console.log(
    moment(task.startDate, DATE_FORMAT.long).format(DATE_FORMAT.short)
  );

  return (
    <form
      className="form-add-task"
      onSubmit={handleSubmit}
    >
      <h2>Add Data</h2>
      {message && (
        <span className={`message-${message.type}`}>{message.text}</span>
      )}
      <div className="fields">
        <label htmlFor="taskName">Task name</label>
        <input
          type="text"
          id="taskName"
          name="taskName"
          value={task.taskName}
          onChange={handleInputChange}
          placeholder="Enter task name"
        />
      </div>
      <div className="fields">
        <label htmlFor="assignedTo">Assigned To</label>
        <Select
          options={users}
          isMulti
          value={task.assignedTo.map(getOption)}
          onChange={(option) => handleOptionChange("assignedTo", option)}
        />
      </div>
      <div className="fields">
        <label htmlFor="startDate">Start Date</label>
        <input
          type="date"
          id="startDate"
          name="startDate"
          onChange={handleDateChange}
          value={moment(task.startDate, DATE_FORMAT.long).format(
            DATE_FORMAT.short
          )}
        />
      </div>
      <div className="fields">
        <label htmlFor="endDate">End Date</label>
        <input
          type="date"
          id="endDate"
          name="endDate"
          onChange={handleDateChange}
          value={moment(task.endDate, DATE_FORMAT.long).format(
            DATE_FORMAT.short
          )}
        />
      </div>
      <div className="fields">
        <label htmlFor="tags">Tags</label>
        <Select
          id="tags"
          options={tags}
          isMulti
          value={task.tags.map(getOption)}
          onChange={(option) => handleOptionChange("tags", option)}
        />
      </div>
      <div className="fields">
        <label htmlFor="followers">Followers</label>
        <Select
          id="followers"
          options={users}
          isMulti
          value={task.followers.map(getOption)}
          onChange={(option) => handleOptionChange("followers", option)}
        />
      </div>
      <div className="fields">
        <label htmlFor="description">Description</label>
        <textarea
          id="description"
          name="description"
          rows="3"
          cols="50"
          onChange={handleInputChange}
          value={task.description}
          placeholder="Enter task description"
        />
      </div>
      <button>Save</button>
    </form>
  );
};

export default AddTask;
