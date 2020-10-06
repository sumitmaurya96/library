import React from "react";
import Popup from "reactjs-popup";

//Icons
import { MdPlusOne } from "react-icons/md";

//Roles
import { admin } from "Helpers/Roles";

const AdminNavigation = (props) => {
  const {
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
    addNew,
  } = props.adminNavigationParams;

  const [suKey, setSuKey] = React.useState("");

  const onInputChange = (vaule) => {
    setSuKey(vaule);
  };

  return (
    <React.Fragment>
      <div className="row py-4 px-5 m-0" style={{ margin: "auto" }}>
        <div className="col-md-4 text-center">
          <p className="h3 text-muted">Admins</p>
          <Popup
            trigger={
              <button
                className="btn btn-sm btn-outline-danger rounded-circle p-2"
                style={{ width: "70px", height: "70px" }}
                onClick={() => props.handleNavigationClick(admins)}
              >
                <p className="" style={{ fontSize: "12px" }}>
                  View
                </p>
                <p className="mt-n2" style={{ fontSize: "12px" }}>
                  Admins
                </p>
              </button>
            }
            modal
            closeOnDocumentClick
            position="right center"
          >
            <form className="form-group row">
              <div className="col-md-8 py-2">
                <input
                  type="password"
                  className="form-control border border-info mx-auto"
                  onChange={(e) => onInputChange(e.target.value)}
                  value={suKey}
                  style={{ width: "80%" }}
                  placeholder="Superuser Key"
                />
              </div>
              <div className="col-md-4 py-2">
                <input
                  type="submit"
                  className="btn btn-md btn-outline-info mx-auto"
                  value="Submit"
                  onClick={(e) => {
                    e.preventDefault();
                    props.handleNavigationClick(admins);
                  }}
                  style={{ width: "60%" }}
                />
              </div>
            </form>
          </Popup>
        </div>
        <div className="col-md-4 text-center">
          <p className="h3 text-muted">Librarians</p>
          <button
            className="btn btn-sm btn-outline-danger rounded-circle p-2"
            style={{ width: "70px", height: "70px" }}
            onClick={() => props.handleNavigationClick(librarians)}
          >
            <p className="h5">{totalLibrarians}</p>
            <p className="mt-n2" style={{ fontSize: "12px" }}>
              Librarians
            </p>
          </button>
        </div>
        <div className="col-md-4 text-center">
          <p className="h3 text-muted">Faculties</p>
          <button
            className="btn btn-sm btn-outline-danger rounded-circle p-2"
            style={{ width: "70px", height: "70px" }}
            onClick={() => props.handleNavigationClick(faculties)}
          >
            <p className="h5">{totalFaculties}</p>
            <p className="mt-n2" style={{ fontSize: "12px" }}>
              Faculties
            </p>
          </button>
        </div>
      </div>
      <div className="row py-4 px-5 m-0" style={{ margin: "auto" }}>
        <div className="col-md-4 text-center">
          <p className="h3 text-muted">Students</p>
          <button
            className="btn btn-sm btn-outline-danger rounded-circle p-2"
            style={{ width: "70px", height: "70px" }}
            onClick={() => props.handleNavigationClick(students)}
          >
            <p className="h5">{totalStudents}</p>
            <p className="mt-n2" style={{ fontSize: "12px" }}>
              Students
            </p>
          </button>
        </div>
        <div className="col-md-4 text-center">
          <p className="h3 text-muted">Orders</p>
          <button
            className="btn btn-sm btn-outline-danger rounded-circle p-2"
            style={{ width: "70px", height: "70px" }}
            onClick={() => props.handleNavigationClick(orders)}
          >
            <p className="h5">{totalOrders}</p>
            <p className="mt-n2" style={{ fontSize: "12px" }}>
              Orders
            </p>
          </button>
        </div>
        <div className="col-md-4 text-center">
          <p className="h3 text-muted">Transactions</p>
          <button
            className="btn btn-sm btn-outline-danger rounded-circle p-2"
            style={{ width: "70px", height: "70px" }}
            onClick={() => props.handleNavigationClick(transactions)}
          >
            <p className="h5">{totalTransactions}</p>
            <p className="mt-n2" style={{ fontSize: "10px" }}>
              Transactions
            </p>
          </button>
        </div>
      </div>
      <div className="row py-4 px-5 mb-0" style={{ margin: "auto" }}>
        <div className="col-md-4 text-center">
          <p className="h3 text-muted">Add New User</p>
          <button
            className="btn btn-sm btn-outline-danger rounded-circle p-2"
            style={{ width: "70px", height: "70px" }}
            onClick={() => props.handleNavigationClick(addNew)}
          >
            <span className="h4">
              <MdPlusOne />
            </span>
          </button>
        </div>
      </div>
    </React.Fragment>
  );
};

export default AdminNavigation;
