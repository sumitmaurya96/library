import React from "react";
import Axios from "axios";
import OrderCard from "components/OrderCard";

const ApproveOrder = (props) => {
  const { apiLink } = props;

  const [userId, setUserId] = React.useState("");
  const [userOrder, setUserOrder] = React.useState(null);

  const onInputChange = (value) => {
    setUserId(value);
  };

  const fetchUserOrder = (event) => {
    event.preventDefault();
    console.log(userId);

    Axios.get(`${apiLink}/orders/${userId}`, {
      headers: {
        Authorization: `Bearer ${localStorage.getItem("token")}`,
      },
    })
      .then((order) => {
        console.log(order.data.order);
        setUserOrder(order.data.order);
      })
      .catch((err) => console.log(err));
  };

  const populateList = () => {
    const { orders } = userOrder;

    const outerDiv = [];
    let innerDiv = [];
    for (let i = 0; i < orders.length; i++) {
      innerDiv.push(
        <div key={i} className={`p-2 col-md-4`}>
          <div className="d-flex">
            <div className="mx-auto">
              <OrderCard orderData={orders[i]} />
            </div>
          </div>
        </div>
      );
      if (i % 3 == 2) {
        outerDiv.push(
          <div key={i} className="row" style={{ margin: "0px" }}>
            {innerDiv[0]}
            {innerDiv[1]}
            {innerDiv[2]}
          </div>
        );
        innerDiv = [];
      }
    }
    if (innerDiv.length !== 0) {
      outerDiv.push(
        <div className="row" style={{ margin: "0px" }}>
          {innerDiv[0]}
          {innerDiv[1]}
          {innerDiv[2]}
        </div>
      );
    }
    return outerDiv;
  };

  return (
    <div
      className="py-4 w-100 justify-content-center d-flex"
      style={{ marginTop: "40px", minHeight: "50vh" }}
    >
      {userOrder ? (
        <div className="px-2 w-100">
          <p className="h3">
            Username:{" "}
            <small className="text-muted h4">{userOrder.username}</small>
          </p>
          <p className="h3">
            Borrow Limit:{" "}
            <small className="text-muted h4">{userOrder.borrowLimit}</small>
          </p>
          <p className="h3">
            Due Amount:{" "}
            <small className="text-muted h4">{userOrder.dueAmount}</small>
          </p>
          <div className="px-2 border border-info w-100">
            <p className="text-center text-muted h1 bg-info mx-2">Orders</p>
            {userOrder.orders.length ? (
              populateList()
            ) : (
              <div
                className="d-flex w-100 justify-content-center"
                style={{ height: "30vh" }}
              >
                <div className="align-self-center h3 text-muted"> No Data</div>
              </div>
            )}
          </div>
        </div>
      ) : (
        <form className="align-self-center" onSubmit={fetchUserOrder}>
          <p className="h5 text-muted"> Enter borrower username</p>
          <input
            type="text"
            value={userId}
            onChange={(e) => {
              e.preventDefault();
              onInputChange(e.target.value);
            }}
          />
          <button className="btn btn-sm btn-info" type="submit">
            Submit
          </button>
        </form>
      )}
    </div>
  );
};

export default ApproveOrder;
