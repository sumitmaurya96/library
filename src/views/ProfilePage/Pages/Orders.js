import React from "react";

//components
import OrderCard from "components/OrderCard";

//Icons
import { MdArrowBack } from "react-icons/md";

const Orders = (props) => {
  const { orders, handleNavigationClick } = props;

  const populateList = () => {
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
      className="jumbotron"
      style={{
        paddingTop: "80px",
        minHeight: "60vh",
      }}
    >
      <a
        style={{ position: "absolute", top: "20%", left: "8%" }}
        className="text-info"
        onClick={() => handleNavigationClick("back")}
      >
        <MdArrowBack size="40px" />
      </a>
      <div className="text-center">
        <p className="h1 text-muted">User Carts</p>
      </div>
      <hr className="bg-info p-0" style={{ width: "70%" }} />
      {orders.length ? (
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
  );
};

export default Orders;
