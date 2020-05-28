import React from "react";

//Role
import { librarian } from "Helpers/Roles";

//Icons
import { MdPlusOne } from "react-icons/md";

const AdminNavigation = (props) => {
  const { role } = props;
  const {
    totalFavourites,
    totalBorrowedBooks,
    totalDueAmount,
    totalTransactions,
  } = props.adminNavigationData;

  const { orders, transactions, favourites } = props.userNavigationParams;

  return (
    <React.Fragment>
      {role === librarian ? (
        <React.Fragment>
          <div className="row py-4 px-5" style={{ marginBottom: "0" }}>
            <div className="col-md-4 text-center">
              <p className="h3 text-muted">Orders</p>
              <button
                className="btn btn-sm btn-outline-danger rounded-circle p-2"
                style={{ width: "70px", height: "70px" }}
                onClick={() => props.handleUserNavigationClick(orders)}
              >
                <p className="h5">{totalBorrowedBooks}</p>
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
                onClick={() => props.handleUserNavigationClick(transactions)}
              >
                <p className="h5">{totalTransactions}</p>
                <p className="mt-n2" style={{ fontSize: "16px" }}>
                  Transactions
                </p>
              </button>
            </div>
            <div className="col-md-4 text-center">
              <p className="h3 text-muted">Add New User</p>
              <button
                className="btn btn-sm btn-outline-danger rounded-circle p-2"
                style={{ width: "70px", height: "70px" }}
                onClick={() => props.handleUserAddNewClick()}
              >
                <MdPlusOne />
              </button>
            </div>
          </div>
        </React.Fragment>
      ) : (
        <React.Fragment>
          <div className="row py-4 px-5" style={{ marginBottom: "0" }}>
            <div className="col-md-4 text-center">
              <p className="h3 text-muted">Favourites</p>
              <button
                className="btn btn-sm btn-outline-danger rounded-circle p-2"
                style={{ width: "70px", height: "70px" }}
                onClick={() => props.handleUserNavigationClick(favourites)}
              >
                <p className="h5">{totalFavourites}</p>
                <p className="mt-n2" style={{ fontSize: "16px" }}>
                  Books
                </p>
              </button>
            </div>
            <div className="col-md-4 text-center">
              <p className="h3 text-muted">Card Used</p>
              <button
                className="btn btn-sm btn-outline-danger rounded-circle p-2"
                style={{ width: "70px", height: "70px" }}
                onClick={() => props.handleUserNavigationClick(orders)}
              >
                <p className="h5">{totalBorrowedBooks}</p>
                <p className="mt-n2" style={{ fontSize: "16px" }}>
                  of {borrowLimit}
                </p>
              </button>
            </div>
            <div className="col-md-4 text-center">
              <p className="h3 text-muted">Due Amount</p>
              <button
                className="btn btn-sm btn-outline-danger rounded-circle p-2"
                style={{ width: "70px", height: "70px" }}
                onClick={() => props.handleUserNavigationClick(orders)}
              >
                <p className="h5">{totalDueAmount}</p>
                <p className="mt-n2" style={{ fontSize: "16px" }}>
                  Rs
                </p>
              </button>
            </div>
          </div>
        </React.Fragment>
      )}
    </React.Fragment>
  );
};

export default AdminNavigation;
