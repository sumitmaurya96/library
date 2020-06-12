import React from "react";

//components
import LibraryCard from "components/LibraryCard";

//Role
import { student } from "Helpers/Roles";

//Icons
import { MdArrowBack } from "react-icons/md";

const UserOrders = (props) => {
  const {
    data,
    dueAmount,
    borrowLimit,
    cardUsed,
    role,
    username,
    handleNavigationClick,
  } = props;

  const populateList = () => {
    const outerDiv = [];
    let innerDiv = [];
    for (let i = 0; i < borrowLimit; i++) {
      innerDiv.push(
        <div key={i} className={`p-2 col-md-4`}>
          <div className="d-flex">
            <div className="mx-auto">
              <LibraryCard
                bookData={
                  i >= data.length
                    ? { empty: "Yes" }
                    : { empty: false, ...data[i] }
                }
                cardNumber={username}
                cardIndex={i + 1}
              />
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
        marginBottom: "0",
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
        <p className="h1 text-muted">
          Your {role === student ? "Cards" : "Orders"}
        </p>
      </div>
      <hr className="bg-info p-0" style={{ width: "70%" }} />
      {populateList()}
      <div className="px-4 py-5 text-center">
        <p
          className="text-muted py-2"
          style={{
            fontSize: `${
              14 + (50 - 14) * ((window.innerWidth - 300) / (1600 - 300))
            }px`,
          }}
        >
          Your {cardUsed} cards are at hold, your total fine Amount is ₹
          {dueAmount}
        </p>
        <button className="btn btn-outline-danger">Pay Now</button>
      </div>
    </div>
  );
};

export default UserOrders;
