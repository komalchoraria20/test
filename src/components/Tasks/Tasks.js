import React, { useState } from "react";
import Table from "../Table/TableContainer";
import MultiUsers from "../MultiUsers";
import Tags from "../Tags";
import EditButton from "../EditButton";
import Drawer from "../Drawer";
import AddTask from "./AddTask";
import data from "../../../data";

const Tasks = () => {
  const [tasks, setTasks] = useState(data);
  const [isAddDrawerOpen, setIsAddDrawerOpen] = useState(false);

  const editTask = (index, taskName) => {
    const _tasks = [...tasks];
    _tasks[index] = {
      ..._tasks[index],
      taskName,
    };
    setTasks(_tasks);
  };

  const addTask = (task) => {
    const _tasks = [...tasks];
    _tasks.push(task);
    setTasks(_tasks);
  };
  const columns = [
    {
      Header: "No.",
      Cell: ({ row: { index } }) => index + 1,
    },
    {
      Header: "Task Name",
      accessor: "taskName",
    },
    {
      Header: "Assigned To",
      accessor: "assignedTo",
      Cell: ({ value }) => <MultiUsers users={value} />,
    },
    {
      Header: "Start Date",
      accessor: "startDate",
    },
    {
      Header: "End Date",
      accessor: "endDate",
    },
    {
      Header: "Tags",
      accessor: "tags",
      Cell: ({ value }) => <Tags tags={value} />,
    },
    {
      Header: "Followers",
      accessor: "followers",
      Cell: ({ value }) => <MultiUsers users={value} />,
    },
    {
      Header: "Description",
      accessor: "description",
    },
    {
      Header: "Action",
      Cell: ({ row: { index } }) => (
        <EditButton editTask={(taskName) => editTask(index, taskName)} />
      ),
    },
  ];

  return (
    <>
      <div className="container">
        <Table
          title="Task Table"
          columns={columns}
          data={tasks}
          onAdd={() => setIsAddDrawerOpen(true)}
        />
      </div>
      <Drawer
        isOpen={isAddDrawerOpen}
        closeDrawer={() => setIsAddDrawerOpen(false)}
      >
        <AddTask addTask={addTask} />
      </Drawer>
    </>
  );
};

export default Tasks;
