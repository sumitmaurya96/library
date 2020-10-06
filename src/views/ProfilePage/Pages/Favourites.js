import React from "react";
import axios from "axios";

//components
import Book from "components/Book";

//Icon
import { MdArrowBack } from "react-icons/md";

//Image
import Loading from "assets/img/loading/loading.gif";

const Favourites = (props) => {
  const { data, handleNavigationClick, apiLink } = props;
  console.log(data);

  const [err, setErr] = React.useState(false);
  const [loading, setLoading] = React.useState(false);

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
    console.log(data);
    const Books = { data: [] };
    data.map((value, index) => {
      axios
        .get(`${apiLink}/books/${value.bookId}`)
        .then((result) => {
          console.log(result);
          Books.data.push(result.data);
          setLoading(false);

          if (data.length - 1 === index) {
            setBooks(Books);
          }
        })
        .catch((err) => {
          console.log(err);
          setErr(true);
          setLoading(false);
        });
    });
  };

  const populateGrid = () => {
    const rows = [];
    let col = [];

    console.log(books);

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
    setLoading(true);
    fetchBooks();
  }, []);

  return (
    <React.Fragment>
      {loading ? (
        <div className="d-flex" style={{ height: "100vh" }}>
          <div className="align-self-center w-100 text-center">
            <img width="64px" height="64px" src={Loading} />
          </div>
        </div>
      ) : (
        <div className="bg-inf pt-4">
          <div
            className="text-inline text-center"
            style={{ position: "relative" }}
          >
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
            {data.length > 0 ? (
              <React.Fragment>
                {err ? (
                  <div
                    className="d-flex justify-content-center"
                    style={{ height: "60vh" }}
                  >
                    <p className="text-danger align-self-center h1">
                      Somthing Went Wrong!
                    </p>
                  </div>
                ) : (
                  populateGrid()
                )}
              </React.Fragment>
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
      )}
    </React.Fragment>
  );
};

export default Favourites;
