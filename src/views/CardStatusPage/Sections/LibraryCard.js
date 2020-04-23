import React from "react";

//Icons
import { GoAlert } from "react-icons/go";

//Image
import BookImage from "assets/img/app/books.svg";

function LibraryCard(props) {
  const { bookData, cardNumber, cardIndex } = props;

  const populateBook = () => {
    const div = [];
    if (bookData.vacant) {
      return (
        <React.Fragment>
          <div
            className="jumbotron bg-transparent pt-3"
            style={{ marginBottom: "0" }}
          >
            <div className="d-flex" style={{ height: "100px" }}>
              <div className=" w-100 align-self-center">
                <p className="h1 text-muted text-center">Card Empty</p>
              </div>
            </div>
          </div>
        </React.Fragment>
      );
    }
    for (const data in bookData) {
      if (data === "fineAmount" && bookData[data] === 0) continue;
      div.push(
        <React.Fragment key={bookData[data]}>
          <div className="d-flex" style={{ flexShrink: "0" }}>
            <div className="w-100">
              <p className="d-inline">{data}:</p>
            </div>
            <div className="d-inline w-100">
              <p>{bookData[data]}</p>
            </div>
          </div>
        </React.Fragment>
      );
    }
    return div;
  };

  return (
    <div
      className={`card shadow rounded bg-${
        bookData.cardType === "departmental" ? "warning" : "info"
      }`}
      style={{
        backgroundColor: "#3D5884",
        width: "20rem",
        flexShrink: "0",
      }}
    >
      <div className="bg-dark text-center rounded-top" style={{}}>
        <img src={BookImage} width="105" height="150" />
        {bookData.fineAmount > 0 && (
          <div
            className="shadow px-4 rounded-circle border border-danger"
            style={{
              opacity: "0.4",
              position: "absolute",
              bottom: "25%",
              right: "35%",
            }}
          >
            <GoAlert color="red" size="60px" />
            <p className="text-danger h2">Due</p>
          </div>
        )}
      </div>
      <div className="card-bod">
        <div className="font-weight-bold text-center pt-2">
          {cardNumber}/{cardIndex}
        </div>
        <hr className="bg-dark" style={{ width: "80%" }} />
        <div
          className={`px-5 text-${
            bookData.cardType == "departmental" ? "dark" : "light"
          }`}
          style={{ fontSize: "12px", flexShrink: "0" }}
        >
          {populateBook()}
        </div>
      </div>
    </div>
  );
}

export default LibraryCard;
