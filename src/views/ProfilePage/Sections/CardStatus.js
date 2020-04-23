import React from "react";
import LibraryCard from "./LibraryCard";

const CardStatus = (props) => {
  const bookData = [
    {
      cardNumber: "1",
      bookName: "Concept of physics",
      author: "H.C.Verma",
      issueDate: "18.03.2020",
      submissionDate: "02.04.2020",
      accNum: "AC6549",
      classNum: "BA-8",
      department: "Information Tech",
    },
    {
      cardNumber: "2",
      bookName: "Algorithms",
      author: "CLRS",
      issueDate: "18.03.2020",
      submissionDate: "02.04.2020",
      accNum: "AC6549",
      classNum: "BA-8",
      department: "Information Tech",
    },
    {
      cardNumber: "3",
      bookName: "Let us C",
      author: "Sourav Shukla",
      issueDate: "18.03.2020",
      submissionDate: "02.04.2020",
      accNum: "AC6549",
      classNum: "BA-8",
      department: "Information Tech",
    },
    {
      cardNumber: "4",
      bookName: "Concept of physics",
      author: "H.C.Verma",
      issueDate: "18.03.2020",
      submissionDate: "02.04.2020",
      accNum: "AC6549",
      classNum: "BA-8",
      department: "Information Tech",
    },
    {
      cardNumber: "5",
      bookName: "Concept of physics",
      author: "H.C.Verma",
      issueDate: "18.03.2020",
      submissionDate: "02.04.2020",
      accNum: "AC6549",
      classNum: "BA-8",
      department: "Information Tech",
    },
    {
      cardNumber: "6",
      bookName: "Concept of physics",
      author: "H.C.Verma",
      issueDate: "18.03.2020",
      submissionDate: "02.04.2020",
      accNum: "AC6549",
      classNum: "BA-8",
      department: "Information Tech",
    },
  ];

  const populateList = () => {
    const outerDiv = [];
    let innerDiv = [];
    for (let i = 0; i < bookData.length; i++) {
      innerDiv.push(
        <div className={`p-2 col-md-6`}>
          <div className="d-inline-block">
            <LibraryCard
              cardNumber={bookData[i].cardNumber}
              bookName={bookData[i].bookName}
              author={bookData[i].author}
              issueDate={bookData[i].issueDate}
              submissionDate={bookData[i].submissionDate}
              accNum={bookData[i].accNum}
              classNum={bookData[i].classNum}
              department={bookData[i].department}
            />
          </div>
        </div>
      );
      if (i % 2 == 1) {
        outerDiv.push(
          <div className="row" style={{ margin: "0px" }}>
            {innerDiv}
          </div>
        );
        innerDiv = [];
      }
    }
    if (innerDiv.length !== 0) {
      outerDiv.push(
        <div className="row" style={{ margin: "0px" }}>
          {innerDiv}
        </div>
      );
    }
    return outerDiv;
  };

  return (
    <React.Fragment>
      <div className="text-center pt-2">
        <p className="h2 text-muted">Card Status</p>
      </div>
      <hr className="bg-info p-0" style={{ width: "70%" }} />
      {populateList()}
      <div className="py-4 text-center">
        <p className="text-muted" style={{ fontSize: "1.5rem" }}>
          Check your full card status.
        </p>
        <button
          className="btn btn-sm btn-outline-danger"
          onClick={() => {
            props.history.push("/card-status");
          }}
        >
          Card Status
        </button>
      </div>
    </React.Fragment>
  );
};

export default CardStatus;
