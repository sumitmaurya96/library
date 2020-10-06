import React from "react";
import axios from "axios";

//components
import Book from "components/Book";

//Icon
import { MdArrowBack } from "react-icons/md";

const Favourites = (props) => {
  const { data, handleNavigationClick, apiLink } = props;
  console.log(data);

  const [books, setBooks] = React.useState({
    data: [],
  });

  const onButtonClick = (details) => {
    props.history.push({
      pathname: "/resources",
      state: details,
      search: details.isbn,
    });
  };

  const fetchBooks = () => {
    const Books = { data: [] };
    data.map((value, index) => {
      axios
        .get(`${apiLink}/books/${value.bookId}`)
        .then((result) => {
          Books.data.push(result.data);

          if (data.length - 1 === index) {
            setBooks(Books);
          }
        })
        .catch((err) => console.log(err));
    });
  };

  const populateGrid = () => {
    const rows = [];
    let col = [];

    books.data.map((value, index) => {
      col.push(
        <div key={index} className="col-md-3">
          <Book
            apiLink={apiLink}
            bookDetails={value}
            onClick={() => onButtonClick(value)}
          />
        </div>
      );

      if ((index + 1) % 4 === 0 || data.length === index + 1) {
        rows.push(
          <div key={index} className="row">
            {col}
          </div>
        );
        col = [];
      }
    });

    return rows;
  };

  React.useEffect(() => {
    fetchBooks();
  }, []);

  return (
    <div className="bg-inf pt-4">
      <div className="text-inline text-center" style={{ position: "relative" }}>
        <a
          style={{ position: "absolute", top: "10%", left: "1%" }}
          className="text-info"
          onClick={() => handleNavigationClick("back")}
        >
          <MdArrowBack size="40px" />
        </a>
        <p className="h2 text-muted">Your favourites</p>
      </div>
      <hr className="bg-info p-0" />
      <div className="container">
        {data.length ? (
          populateGrid()
        ) : (
          <div
            className="d-flex justify-content-center"
            style={{ height: "60vh" }}
          >
            <p className="text-muted align-self-center h3">No data found</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Favourites;
