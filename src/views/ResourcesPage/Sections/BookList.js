import React from "react";

import Pagination from "./Pagination";

//CSS
import "./bookList.css";

//icons
import { FiBookOpen, FiBook } from "react-icons/fi";
import { GiBlackBook, GiEvilBook } from "react-icons/gi";
import { AiOutlineBook } from "react-icons/ai";

// Componnet
import Book from "./Book";

const BookList = (props) => {
  const categories = {
    Magazines: "Magazines",
    Journals: "Journals",
    Departmental: "Departmental",
    Story: "Story",
    Others: "Others",
  };

  const [books, setBooks] = React.useState({
    booksData: [],
    totalPages: 0,
    category: categories.Magazines,
  });

  const [currentPage, setCurrentPage] = React.useState(1);

  const handleBookCategory = (BookCategory) => {
    setBooks((state) => {
      const Books = { ...state };
      Books.category = BookCategory;
      return Books;
    });
    //set page to page 1
    setCurrentBooksPage(1);
  };

  const setCurrentBooksPage = (pageNumber) => {
    setCurrentPage((state) => {
      return pageNumber;
    });
  };

  const onButtonClick = (details) => {
    props.history.push({
      pathname: "/book-details",
      search: `isbn=${details.isbn}`,
      state: { bookDetails: details },
    });
  };

  const setFont = () => {
    return 7 + (16 - 7) * ((window.innerWidth - 300) / (1600 - 300));
  };

  const fetchPageData = () => {
    //use axios
    const data = props.fetchPageData(currentPage, books.category);
    setBooks((state) => {
      const Books = { ...state };
      if (data) {
        Books.booksData = data.booksData;
        Books.totalPages = data.totalPages;
        console.log(state, currentPage);
      }

      return Books;
    });
  };

  React.useEffect(() => {
    fetchPageData();
  }, [currentPage, books.category]);

  return (
    <div className="row">
      <div className="col-md-12 offset-md- bg-light shadow-lg">
        <ul className="nav nav-pills d-inline-bloc p-2 rounded my-3 bg-info">
          <li className="nav-item d-inline-block border-right">
            <button
              className={`btn btn-info py-3 px-2 ${
                categories.Magazines.localeCompare(books.category) === 0
                  ? "active"
                  : ""
              }`}
              href="#"
              style={{
                borderRadius: "0px",
                fontSize: `${setFont()}px`,
              }}
              onClick={() => {
                handleBookCategory(categories.Magazines);
              }}
            >
              <span>
                <FiBookOpen size={`${setFont() + 7}px`} />
                <span className="p-1">Magazines</span>
              </span>
            </button>
          </li>
          <li className="nav-item d-inline-block border-left border-right">
            <button
              className={`btn btn-info py-3 px-2 ${
                categories.Journals.localeCompare(books.category) === 0
                  ? "active"
                  : ""
              }`}
              href="#"
              style={{
                borderRadius: "0px",
                fontSize: `${setFont()}px`,
              }}
              onClick={() => {
                handleBookCategory(categories.Journals);
              }}
            >
              <span>
                <AiOutlineBook size={`${setFont() + 7}px`} />
                <span className="p-1">Journals</span>
              </span>
            </button>
          </li>
          <li className="nav-item d-inline-block border-left border-right">
            <button
              className={`btn btn-info py-3 px-2 ${
                categories.Departmental.localeCompare(books.category) === 0
                  ? "active"
                  : ""
              }`}
              href="#"
              style={{
                borderRadius: "0px",
                fontSize: `${setFont()}px`,
              }}
              onClick={() => {
                handleBookCategory(categories.Departmental);
              }}
            >
              <span>
                <FiBook size={`${setFont() + 7}px`} />
                <span className="p-1">Departmental</span>
              </span>
            </button>
          </li>
          <li className="nav-item d-inline-block border-left border-right">
            <button
              className={`btn btn-info py-3 px-2 ${
                categories.Story.localeCompare(books.category) === 0
                  ? "active"
                  : ""
              }`}
              href="#"
              style={{
                borderRadius: "0px",
                fontSize: `${setFont()}px`,
              }}
              onClick={() => {
                handleBookCategory(categories.Story);
              }}
            >
              <span>
                <GiEvilBook size={`${setFont() + 7}px`} />
                <span className="p-1">Story</span>
              </span>
            </button>
          </li>

          <li className="nav-item d-inline-block border-left">
            <button
              className={`btn btn-info py-3 px-2 ${
                categories.Others.localeCompare(books.category) === 0
                  ? "active"
                  : ""
              }`}
              href="#"
              style={{
                borderRadius: "0px",
                fontSize: `${setFont()}px`,
              }}
              onClick={() => {
                // console.log(categories.Others);
                handleBookCategory(categories.Others);
              }}
            >
              <span>
                <GiBlackBook size={`${setFont() + 7}px`} />
                <span className="p-1">Others</span>
              </span>
            </button>
          </li>
        </ul>
        {books.booksData.length ? (
          <div
            className="bg-light d-flex grid"
            style={{
              flexFlow: "row wrap",
            }}
          >
            {books.booksData.map((book, index) => {
              return (
                <div key={book.isbn + index} className="p-2">
                  <Book bookDetails={book} onClick={onButtonClick} />
                </div>
              );
            })}
          </div>
        ) : (
          <div>No Data</div>
        )}

        <Pagination
          currentPage={currentPage}
          totalPages={100}
          setCurrentPage={setCurrentBooksPage}
        />
      </div>
    </div>
  );
};

export default BookList;
