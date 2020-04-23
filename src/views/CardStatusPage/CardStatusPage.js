import React from "react";
import LibraryCard from "./Sections/LibraryCard";

import Navbar from "views/Components/Navbar/Navbar";
import Footer from "views/Components/Footer/Footer";

const CardStatusPage = (props) => {
  console.log(window.innerWidth);

  const bookData = {
    cardNumber: "SL2069",
    cards: [
      {
        bookName: "Concept of physics",
        author: "H.C.Verma",
        issueDate: "18.03.2020",
        submissionDate: "02.04.2020",
        accNum: "AC6549",
        classNum: "BA-8",
        department: "Information Tech",
        cardType: "departmental",
        fineAmount: 0,
      },
      {
        bookName: "Algorithms",
        author: "CLRS",
        issueDate: "18.03.2020",
        submissionDate: "02.04.2020",
        accNum: "AC6549",
        classNum: "BA-8",
        department: "Information Tech",
        cardType: "departmental",
        fineAmount: 0,
      },
      {
        bookName: "Let us C",
        author: "Sourav Shukla",
        issueDate: "18.03.2020",
        submissionDate: "02.04.2020",
        accNum: "AC6549",
        classNum: "BA-8",
        department: "Information Tech",
        cardType: "departmental",
        fineAmount: 50,
      },
      {
        bookName: "Concept of physics",
        author: "H.C.Verma",
        issueDate: "18.03.2020",
        submissionDate: "02.04.2020",
        accNum: "AC6549",
        classNum: "BA-8",
        department: "Information Tech",
        cardType: "central",
        fineAmount: 200,
      },
      {
        bookName: "Concept of physics",
        author: "H.C.Verma",
        issueDate: "18.03.2020",
        submissionDate: "02.04.2020",
        accNum: "AC6549",
        classNum: "BA-8",
        department: "Information Tech",
        cardType: "central",
        fineAmount: 0,
      },
      {
        vacant: true,
      },
    ],
  };

  const [cards, setCards] = React.useState({
    totalFineAmount: 0,
    onHoldCards: 0,
  });

  const calculateFine = () => {
    console.log("hahfalhfa");

    const Cards = { ...cards };
    Cards.totalFineAmount = 0;
    Cards.onHoldCards = 0;
    bookData.cards.forEach((data, index) => {
      if (data.fineAmount > 0) {
        Cards.onHoldCards++;
        Cards.totalFineAmount += data.fineAmount;
      }
    });
    setCards(Cards);
  };

  React.useEffect(() => {
    calculateFine();
  }, []);

  const populateList = () => {
    const outerDiv = [];
    let innerDiv = [];
    for (let i = 0; i < bookData.cards.length; i++) {
      innerDiv.push(
        <div key={i} className={`p-2 col-md-4`}>
          <div className="d-flex">
            <div className="mx-auto">
              <LibraryCard
                bookData={bookData.cards[i]}
                cardNumber={bookData.cardNumber}
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
    <React.Fragment>
      <Navbar {...props} />
      <div
        className="jumbotron"
        style={{
          paddingTop: "80px",
          marginBottom: "0",
        }}
      >
        <div className="text-center">
          <p className="h1 text-muted">Your Cards</p>
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
            Your {cards.onHoldCards} cards are at hold, your total fine Amount
            is ₹{cards.totalFineAmount}
          </p>
          <button className="btn btn-outline-danger">Pay Now</button>
        </div>
      </div>
      <Footer />
    </React.Fragment>
  );
};

export default CardStatusPage;
