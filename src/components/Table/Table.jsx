import * as React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import "./Table.css";

function createData(name, trackingId, date, status) {
  return { name, trackingId, date, status };
}

const rowData = [
  {
    type: "Income",
    amount: 31000,
    status: "Approved",
  },
  {
    type: "Expenses",
    amount: 17500,
    status: "Approved",
  },
  {
    type: "Income",
    amount: 11340,
    status: "Pending",
  },
  {
    type: "Savings",
    amount: 2500,
    status: "Approved",
  },
  {
    type: "Expenses",
    amount: 2500,
    status: "Approved",
  },
  {
    type: "Expenses",
    amount: 2500,
    status: "Approved",
  },
  {
    type: "Income",
    amount: 2500,
    status: "Failed",
  },
  {
    type: "Expenses",
    amount: 2500,
    status: "Approved",
  },
  {
    type: "Expenses",
    amount: 2500,
    status: "Approved",
  },
  {
    type: "Savings",
    amount: 4500,
    status: "Approved",
  },
  {
    type: "Income",
    amount: 31000,
    status: "Pending",
  },
  {
    type: "Savings",
    amount: 17500,
    status: "Pending",
  },
  {
    type: "Savings",
    amount: 11340,
    status: "Approved",
  },
  {
    type: "Income",
    amount: 2500,
    status: "Approved",
  },
  {
    type: "Income",
    amount: 2500,
    status: "Approved",
  },
  {
    type: "Expenses",
    amount: 2500,
    status: "Approved",
  },
  {
    type: "Expenses",
    amount: 2500,
    status: "Failed",
  },
  {
    type: "Income",
    amount: 2500,
    status: "Approved",
  },
  {
    type: "Savings",
    amount: 2500,
    status: "Approved",
  },
  {
    type: "Expenses",
    amount: 4500,
    status: "Approved",
  },
  {
    type: "Income",
    amount: 31000,
    status: "Failed",
  },
  {
    type: "Savings",
    amount: 17500,
    status: "Approved",
  },
  {
    type: "Expenses",
    amount: 11340,
    status: "Failed",
  },
  {
    type: "Savings",
    amount: 2500,
    status: "Pending",
  },
  {
    type: "Income",
    amount: 2500,
    status: "Approved",
  },
  {
    type: "Savings",
    amount: 2500,
    status: "Approved",
  },
  {
    type: "Income",
    amount: 2500,
    status: "Approved",
  },
  {
    type: "Expenses",
    amount: 2500,
    status: "Pending",
  },
];

const makeStyle = (status) => {
  if (status === "Approved") {
    return {
      background: "rgb(145 254 159 / 47%)",
      color: "green",
    };
  } else if (status === "Pending") {
    return {
      background: "#f7cb73",
      color: "#f29339",
    };
  } else {
    return {
      background: "#fc929d",
      color: "white",
    };
  }
};

export default function BasicTable() {
  return (
    <div className="Table">
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          width: "100%",
        }}
      >
        <h3>Recent Orders</h3>
        <p className="viewAll">View all</p>
      </div>
      <TableContainer
        component={Paper}
        style={{
          boxShadow: "0px 13px 20px 0px #80808029",
          borderRadius: 12,
        }}
      >
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell>Type</TableCell>
              <TableCell align="left">Amount</TableCell>
              <TableCell align="left">Date</TableCell>
              <TableCell align="left">Status</TableCell>
            </TableRow>
          </TableHead>
          <TableBody style={{ color: "white" }}>
            {rowData.map((row, index) => (
              <TableRow
                key={row.name}
                sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
              >
                <TableCell component="th" scope="row">
                  {row.type}
                </TableCell>
                <TableCell align="left">{row.amount}</TableCell>
                <TableCell align="left">{`${
                  rowData.length - index
                } February 2022`}</TableCell>
                <TableCell align="left">
                  <span className="status" style={makeStyle(row.status)}>
                    {row.status}
                  </span>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
}
