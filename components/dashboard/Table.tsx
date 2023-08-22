"use client";
import DataTable from "react-data-table-component";

const paginationComponentOptions = {};

const columns = [
  {
    name: "Name",
    selector: (row: any) => row.title,
  },
  {
    name: "Department",
    selector: (row: any) => row.department,
  },
  {
    name: "Assigned",
    selector: (row: any) => row.assigned,
  },
  {
    name: "Overdue",
    selector: (row: any) => row.overdue,
  },
  {
    name: "Closed",
    selector: (row: any) => row.closed,
  },
];

const data = [
  {
    id: 1,
    title: "ABIRIN Sharifa Moniera",
    department: "Mayor's Office",
    assigned: 2,
    overdue: 5,
    closed: 18,
  },
  {
    id: 2,
    title: "ABIRIN Sharifa Moniera",
    department: "Mayor's Office",
    assigned: 2,
    overdue: 5,
    closed: 18,
  },
  {
    id: 3,
    title: "ABIRIN Sharifa Moniera",
    department: "Mayor's Office",
    assigned: 2,
    overdue: 5,
    closed: 18,
  },
  {
    id: 4,
    title: "ABIRIN Sharifa Moniera",
    department: "Mayor's Office",
    assigned: 2,
    overdue: 5,
    closed: 18,
  },
  {
    id: 5,
    title: "ABIRIN Sharifa Moniera",
    department: "Mayor's Office",
    assigned: 2,
    overdue: 5,
    closed: 18,
  },
  {
    id: 6,
    title: "ABIRIN Sharifa Moniera",
    department: "Mayor's Office",
    assigned: 2,
    overdue: 5,
    closed: 18,
  },
  {
    id: 7,
    title: "ABIRIN Sharifa Moniera",
    department: "Mayor's Office",
    assigned: 2,
    overdue: 5,
    closed: 18,
  },
  {
    id: 8,
    title: "ABIRIN Sharifa Moniera",
    department: "Mayor's Office",
    assigned: 2,
    overdue: 5,
    closed: 18,
  },
  {
    id: 9,
    title: "ABIRIN Sharifa Moniera",
    department: "Mayor's Office",
    assigned: 2,
    overdue: 5,
    closed: 18,
  },
  {
    id: 10,
    title: "ABIRIN Sharifa Moniera",
    department: "Mayor's Office",
    assigned: 2,
    overdue: 5,
    closed: 18,
  },
  {
    id: 11,
    title: "ABIRIN Sharifa Moniera",
    department: "Mayor's Office",
    assigned: 2,
    overdue: 5,
    closed: 18,
  },
];

export default function Table() {
  return (
    <DataTable
      columns={columns}
      data={data}
      pagination
      paginationPerPage={6}
      paginationComponentOptions={{ noRowsPerPage: true }}
    />
  );
}
