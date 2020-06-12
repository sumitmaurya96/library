import React from "react";

//components
import Book from "components/Book";

//Icons
import { MdSearch } from "react-icons/md";

const SearchResults = (props) => {
  const { books, search, apiLinks } = props;

  const onButtonClick = (details) => {
    console.log(details);
    props.history.push({
      pathname: "/resources",
      search: `bookId=${details._id}`,
      state: details,
    });
  };

  const populateGrid = () => {
    const rows = [];
    let col = [];

    books.map((value, index) => {
      col.push(
        <div key={index} className="col-md-3">
          <Book
            apiLinks={apiLinks}
            key={index}
            bookDetails={value.book}
            onClick={() => onButtonClick(value.book)}
          />
        </div>
      );

      if ((index + 1) % 4 === 0 || books.length === index + 1) {
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

  return (
    <div className="py-5 px-4">
      <div className="row m-0 py-5 px-4">
        <div className="col-md-6 offset-md-3">
          <form
            className="input-group"
            style={{
              position: "relative",
            }}
            onSubmit={props.onFormSubmit}
          >
            <input
              type="text"
              value={search.query}
              onChange={(event) => props.onInputChange(event.target.value)}
              className="form-control border-info rounded-0"
              placeholder="Search"
              aria-label="Search"
              aria-describedby="basic-addon2"
            />
            <a
              className="h4 text-info"
              href="#"
              type="submit"
              style={{
                position: "absolute",
                top: "10%",
                right: "2%",
                zIndex: "10",
              }}
              onClick={props.onFormSubmit}
            >
              <MdSearch />
            </a>
          </form>
        </div>
      </div>
      <div className="container" style={{ minHeight: "60vh" }}>
        {books.length ? (
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

export default SearchResults;
