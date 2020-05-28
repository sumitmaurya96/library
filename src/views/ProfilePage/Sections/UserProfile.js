import React from "react";
import axios from "axios";
import { librarian, admin, student, faculty } from "Helpers/Roles";

export default function ProfilePage(props) {
  const {
    id,
    firstname,
    lastname,
    username,
    email,
    role,
    profilePicUrl,
  } = props.userData;

  const userNavigationParams = {
    favourites: "favourites",
    orders: "orders",
    transactions: "transactions",
  };

  const adminNavigationParams = {
    admins: "admins",
    librarians: "librarians",
    faculties: "faculties",
    students: "students",
    orders: "orders",
    transactions: "transactions",
  };

  const { favourites } = props;

  const [orders, setOrders] = React.useState({});

  React.useEffect(() => {
    if (role === "student" || role === "faculty") {
      axios
        .get(`http://localhost:5000/orders/${username}`, {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
        })
        .then((orders) => {
          console.log(orders.data.order);
          setOrders((state) => {
            const Orders = { ...state };
            Orders["borrowLimit"] = orders.data.order.borrowLimit;
            Orders["dueAmount"] = orders.data.order.dueAmount;
            let count = 0;
            for (const od of orders.data.order.orders) {
              if (od.granted) {
                count++;
              }
            }
            Orders["cardUsed"] = count;
            Orders["orders"] = orders.data.order.orders;
            return Orders;
          });
        })
        .catch((err) => {
          console.log(err);
        });
    }
    console.log(id);
  }, []);

  return (
    <React.Fragment>
      <div className="row" style={{ marginBottom: "0" }}>
        <div
          className="col-md-3 offset-md-2 text-center"
          style={{ marginBottom: "0" }}
        >
          <img
            src={`http://localhost:5000${profilePicUrl}`}
            className="rounded-circle pt-2"
            width="140"
            height="140"
          />
          <br />
          <button className="m-2 btn btn-sm btn-outline-secondary">
            Update Photo
          </button>
        </div>
        <div className="d-inline-block col-md-6 d-flex">
          <div className="align-self-center mx-auto">
            <p className="h3">{`${firstname} ${lastname}`}</p>
          </div>
        </div>
      </div>
      {role === admin || role === librarian}
      <div className="row py-4 px-5" style={{ marginBottom: "0" }}>
        <div className="col-md-4 text-center">
          <p className="h3 text-muted">Favourites</p>
          <button
            className="btn btn-sm btn-outline-danger rounded-circle p-2"
            style={{ width: "70px", height: "70px" }}
            onClick={() => props.setFavouriteVisible(true)}
          >
            <p className="h5">{favourites.length}</p>
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
          >
            <p className="h5">{orders.cardUsed}</p>
            <p className="mt-n2" style={{ fontSize: "16px" }}>
              of {orders.borrowLimit}
            </p>
          </button>
        </div>
        <div className="col-md-4 text-center">
          <p className="h3 text-muted">Due Amount</p>
          <button
            className="btn btn-sm btn-outline-danger rounded-circle p-2"
            style={{ width: "70px", height: "70px" }}
          >
            <p className="h5">{orders.dueAmount}</p>
            <p className="mt-n2" style={{ fontSize: "16px" }}>
              Rs
            </p>
          </button>
        </div>
      </div>
      <div className="row py-5 px-2 bg-info">
        <div className="col-md-4 text-center">
          <p className="h3 text-muted">Account</p>
        </div>
        <div className="col-md-8 py-1 px-2">
          <div className="row" style={{ margin: "0" }}>
            <div className="col-md-12 d-flex">
              <div className="w-100">
                <p className="d-inline">
                  {role === "student" ? "Card Number:" : "Username"}
                </p>
              </div>
              <div className="d-inline w-100">
                <p className="h5 d-inline">{username}</p>
              </div>
            </div>
          </div>
          <div className="row" style={{ margin: "0" }}>
            <div className="col-md-12 d-flex">
              <div className="w-100">
                <p className="d-inline">Email:</p>
              </div>
              <div className="d-inline w-100">
                <p className="h5 d-inline">{email}</p>
              </div>
            </div>
          </div>
          <div className="row" style={{ margin: "0" }}>
            <div className="col-md-12 d-flex">
              <div className="w-100">
                <p className="d-inline">Password:</p>
              </div>
              <div className="d-inline w-100">
                <a className="text-dark" href="#">
                  Change Password
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
}
