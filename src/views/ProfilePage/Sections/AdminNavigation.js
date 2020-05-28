import React from "react";

//Icons
import { MdPlusOne } from "react-icons/md";

const AdminNavigation = (props) => {
  const {
    totalAdmins,
    totalFaculties,
    totalLibrarians,
    totalStudents,
    totalOrders,
    totalTransactions,
  } = props.adminNavigationData;

  const {
    admins,
    librarians,
    faculties,
    students,
    orders,
    transactions,
  } = props.adminNavigationParams;

  return (
    <React.Fragment>
      <div className="row py-4 px-5" style={{ marginBottom: "0" }}>
        <div className="col-md-4 text-center">
          <p className="h3 text-muted">Admins</p>
          <button
            className="btn btn-sm btn-outline-danger rounded-circle p-2"
            style={{ width: "70px", height: "70px" }}
            onClick={() => props.handleAdminNavigationClick(admins)}
          >
            <p className="h5">{totalAdmins}</p>
            <p className="mt-n2" style={{ fontSize: "16px" }}>
              Admins
            </p>
          </button>
        </div>
        <div className="col-md-4 text-center">
          <p className="h3 text-muted">Librarians</p>
          <button
            className="btn btn-sm btn-outline-danger rounded-circle p-2"
            style={{ width: "70px", height: "70px" }}
            onClick={() => props.handleAdminNavigationClick(librarians)}
          >
            <p className="h5">{totalLibrarians}</p>
            <p className="mt-n2" style={{ fontSize: "16px" }}>
              Librarians
            </p>
          </button>
        </div>
        <div className="col-md-4 text-center">
          <p className="h3 text-muted">Faculties</p>
          <button
            className="btn btn-sm btn-outline-danger rounded-circle p-2"
            style={{ width: "70px", height: "70px" }}
            onClick={() => props.handleAdminNavigationClick(faculties)}
          >
            <p className="h5">{totalFaculties}</p>
            <p className="mt-n2" style={{ fontSize: "16px" }}>
              Faculties
            </p>
          </button>
        </div>
      </div>
      <div className="row py-4 px-5" style={{ marginBottom: "0" }}>
        <div className="col-md-4 text-center">
          <p className="h3 text-muted">Students</p>
          <button
            className="btn btn-sm btn-outline-danger rounded-circle p-2"
            style={{ width: "70px", height: "70px" }}
            onClick={() => props.handleAdminNavigationClick(students)}
          >
            <p className="h5">{totalStudents}</p>
            <p className="mt-n2" style={{ fontSize: "16px" }}>
              Students
            </p>
          </button>
        </div>
        <div className="col-md-4 text-center">
          <p className="h3 text-muted">Orders</p>
          <button
            className="btn btn-sm btn-outline-danger rounded-circle p-2"
            style={{ width: "70px", height: "70px" }}
            onClick={() => props.handleAdminNavigationClick(orders)}
          >
            <p className="h5">{totalOrders}</p>
            <p className="mt-n2" style={{ fontSize: "16px" }}>
              Orders
            </p>
          </button>
        </div>
        <div className="col-md-4 text-center">
          <p className="h3 text-muted">Transactions</p>
          <button
            className="btn btn-sm btn-outline-danger rounded-circle p-2"
            style={{ width: "70px", height: "70px" }}
            onClick={() => props.handleAdminNavigationClick(transactions)}
          >
            <p className="h5">{totalTransactions}</p>
            <p className="mt-n2" style={{ fontSize: "16px" }}>
              Transactions
            </p>
          </button>
        </div>
      </div>
      <div className="row py-4 px-5" style={{ marginBottom: "0" }}>
        <div className="col-md-4 text-center">
          <p className="h3 text-muted">Add New User</p>
          <button
            className="btn btn-sm btn-outline-danger rounded-circle p-2"
            style={{ width: "70px", height: "70px" }}
            onClick={() => props.handleAddNewClick()}
          >
            <MdPlusOne />
          </button>
        </div>
      </div>
    </React.Fragment>
  );
};

export default AdminNavigation;
