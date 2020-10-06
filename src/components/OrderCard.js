import React from "react";

//Icons
import { GoAlert } from "react-icons/go";

//Image
import BookImage from "assets/img/app/books.svg";
import { student } from "Helpers/Roles";

function OrderCard(props) {
  const {
    data,
    dueAmount,
    borrowLimit,
    cardUsed,
    role,
    username,
  } = props.orderData;

  return (
    <div
      className={`shadow rounded bg-${role === student ? "warning" : "info"}`}
      style={{
        width: "16rem",
        flexShrink: "0",
      }}
    >
      <p className="font-weight-bold text-center pt-2">Username: {username}</p>
      <p className="font-weight-bold text-center pt-2">
        Borrow Limit: {borrowLimit}
      </p>
      <p className="font-weight-bold text-center pt-2">
        Due Amount: {dueAmount}
      </p>
      <p className="font-weight-bold text-center pt-2">Card Used: {cardUsed}</p>
      <hr className="bg-dark" style={{ width: "80%" }} />
      <div className="font-weight-bold text-center pt-2">
        {data.map((book, index) => {
          return <p>Hi....................</p>;
        })}
      </div>
    </div>
  );
}

export default OrderCard;
