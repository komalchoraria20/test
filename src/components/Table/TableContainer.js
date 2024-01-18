import React from "react";
import { useTable } from "react-table";
import Table from "./Table";

const TableContainer = ({ title, columns, data, onAdd }) => {
  return (
    <section className="table-container">
      <div className="title-container">
        <h2>{title}</h2>
        <button
          className="add-button"
          onClick={onAdd}
        >
          Enter New Data
        </button>
      </div>
      <Table
        columns={columns}
        data={data}
      />
    </section>
  );
};

export default TableContainer;
