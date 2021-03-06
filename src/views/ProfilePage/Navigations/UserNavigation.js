import React from "react";

//Role
import { librarian } from "Helpers/Roles";

//Icons
import { MdPlusOne } from "react-icons/md";

const UserNavigation = (props) => {
  const { role } = props;
  const {
    totalFavourites,
    totalBorrowedBooks,
    totalDueAmount,
    totalTransactions,
    borrowLimit,
  } = props.userNavigationData;

  const {
    userOrder,
    orders,
    transactions,
    favourites,
    addNew,
    approveOrder,
  } = props.userNavigationParams;

  return (
    <div
      className="row pt-4 pb-5 px-5 m-0"
      style={{
        margin: "auto",
      }}
    >
      {role === librarian ? (
        <React.Fragment>
          <div className="col-md-4 text-center">
            <p className="h3 text-muted">Orders</p>
            <button
              className="btn btn-sm btn-outline-danger rounded-circle p-2"
              style={{ width: "70px", height: "70px" }}
              onClick={() => props.handleNavigationClick(orders)}
            >
              <p className="h5">{totalBorrowedBooks}</p>
              <p className="mt-n2" style={{ fontSize: "12px" }}>
                Orders
              </p>
            </button>
          </div>
          <div className="col-md-4 text-center">
            <p className="h3 text-muted">Add New User</p>
            <button
              className="btn btn-sm btn-outline-danger rounded-circle p-2"
              style={{ width: "70px", height: "70px" }}
              onClick={() => props.handleNavigationClick(addNew)}
            >
              <MdPlusOne size="20px" />
            </button>
          </div>
          <div className="col-md-4 text-center">
            <p className="h3 text-muted">Issue Order</p>
            <button
              className="btn btn-sm btn-outline-danger rounded-circle p-2"
              style={{ width: "70px", height: "70px" }}
              onClick={() => props.handleNavigationClick(approveOrder)}
            >
              Issue
            </button>
          </div>
        </React.Fragment>
      ) : (
        <React.Fragment>
          <div className="col-md-4 text-center">
            <p className="h3 text-muted">Favourites</p>
            <button
              className="btn btn-sm btn-outline-danger rounded-circle p-2"
              style={{ width: "70px", height: "70px" }}
              onClick={() => props.handleNavigationClick(favourites)}
            >
              <p className="h5">{totalFavourites}</p>
              <p className="mt-n2" style={{ fontSize: "12px" }}>
                Books
              </p>
            </button>
          </div>
          <div className="col-md-4 text-center">
            <p className="h3 text-muted">Card Used</p>
            <button
              className="btn btn-sm btn-outline-danger rounded-circle p-2"
              style={{ width: "70px", height: "70px" }}
              onClick={() => props.handleNavigationClick(userOrder)}
            >
              <p className="h5">{totalBorrowedBooks}</p>
              <p className="mt-n2" style={{ fontSize: "12px" }}>
                of {borrowLimit}
              </p>
            </button>
          </div>
          <div className="col-md-4 text-center">
            <p className="h3 text-muted">Due Amount</p>
            <button
              className="btn btn-sm btn-outline-danger rounded-circle p-2"
              style={{ width: "70px", height: "70px" }}
              onClick={() => props.handleNavigationClick(userOrder)}
            >
              <p className="h5">{totalDueAmount}</p>
              <p className="mt-n2" style={{ fontSize: "12px" }}>
                Rs
              </p>
            </button>
          </div>
        </React.Fragment>
      )}
    </div>
  );
};

export default UserNavigation;
