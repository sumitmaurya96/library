import React from "react";
import Book from "components/Book";

//Icon
import { MdArrowBack } from "react-icons/md";

const Favourites = (props) => {
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

  return (
    <div className="bg-inf pt-4">
      <div className="text-inline text-center" style={{ position: "relative" }}>
        <a
          style={{ position: "absolute", top: "10%", left: "1%" }}
          className="text-info"
          onClick={() => props.setFavouriteVisible(false)}
        >
          <MdArrowBack size="40px" />
        </a>
        <p className="h2 text-muted">Your favourites</p>
      </div>
      <hr className="bg-info p-0" />
      <div>
        {bookData.map((value, index) => {
          return (
            <Book
              key={index}
              cardNumber={value.cardNumber}
              bookName={value.bookName}
              author={value.author}
              issueDate={value.issueDate}
              submissionDate={value.submissionDate}
              accNum={value.accNum}
              classNum={value.classNum}
              department={value.department}
            />
          );
        })}
      </div>
    </div>
  );
};

export default Favourites;
