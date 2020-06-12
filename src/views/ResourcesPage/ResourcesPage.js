import React from "react";
import axios from "axios";

//Component
import Navbar from "views/Components/Navbar/Navbar";
import Footer from "views/Components/Footer/Footer";

//page
import BookDetailsPage from "./Sections/BookDetailsPage/BookDetailsPage";

//sections
import Pagination from "./Sections/Pagination";
import FilterSection from "./Sections/FilterSection";
import AddNewBook from "./Sections/AddNewBook";
import BookList from "./Sections/BookList";

//Role
import { librarian, admin } from "Helpers/Roles";

const ResourcesPage = (props) => {
  const { apiLink } = props;
  const { role, favourites, _id } = props.user.userData;
  let filters;
  const pageSize = 20;

  let [flag, setFlag] = React.useState(0);

  const [showNewBookPage, setShowNewBookPage] = React.useState(false);
  const [bookDetails, setBookDetails] = React.useState({
    visible: false,
    data: {},
  });

  const [books, setBooks] = React.useState({
    totalBooks: -1,
    pageNumber: 1,
    data: [],
  });

  const currentPage = (pageNumber) => {
    setBooks((state) => {
      const Book = { ...state };
      Book.pageNumber = pageNumber;
      return Book;
    });
  };

  const changeFlag = () => {
    console.log(flag);
    setFlag((state) => {
      return state + 1;
    });
  };

  const getFilters = (filtersParams) => {
    filters = { ...filtersParams };
  };

  const pageVisibility = (pageName, bookData, actionVal = false) => {
    if (pageName === "addnewbook") {
      setShowNewBookPage(actionVal);
    } else {
      flag++;
      setBookDetails((state) => {
        const BookDetails = { ...state };
        BookDetails.visible = actionVal;
        BookDetails.data = bookData;
        return BookDetails;
      });
    }
  };

  React.useEffect(() => {
    axios
      .get(
        `${apiLink}/books/custom-search/pageSize=${pageSize}&pageNumber=${books.pageNumber}`,
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
        }
      )
      .then(({ data }) => {
        console.log(data);
        setBooks((state) => {
          const Book = { ...state };
          Book.totalBooks = data.total;
          Book.data = data.books;
          return Book;
        });
        if (props.location.search && props.location.state) {
          const search = props.location.search.split("?")[1].split("&");
          const query = {};
          for (const ops of search) {
            const keyVal = ops.split("=");
            query[keyVal[0]] = keyVal[1];
          }
          pageVisibility("bookdetails", props.location.state, true);
        }
      })
      .catch((err) => {
        console.log(err);
      });
  }, [books.pageNumber, flag]);

  return (
    <div>
      <Navbar {...props} logOut={props.logOut} apiLink={apiLink} />
      <div
        className="py-1 px-5"
        style={{ minHeight: "80vh", marginTop: "80px" }}
      >
        {bookDetails.visible ? (
          <BookDetailsPage
            apiLink={apiLink}
            changeFlag={changeFlag}
            {...props}
            favourites={favourites}
            role={role}
            id={_id}
            bookDetails={bookDetails.data}
            goBack={() => pageVisibility("bookdetails", null, false)}
          />
        ) : (
          <React.Fragment>
            {showNewBookPage ? (
              <AddNewBook
                apiLink={apiLink}
                changeFlag={changeFlag}
                goBack={() => pageVisibility("addnewbook", null, false)}
              />
            ) : (
              <React.Fragment>
                <FilterSection getFilters={getFilters} />
                <BookList
                  {...props}
                  data={books.data}
                  bookDetailsVisible={(bookData) => {
                    pageVisibility("bookdetails", bookData, true);
                  }}
                />
                <React.Fragment>
                  {(role === librarian || role === admin) && (
                    <div className="jumbotron my-5">
                      <span className="text-muted h4 mr-5">
                        You can add new book here
                      </span>
                      <span className="text-center">
                        <button
                          className="btn btn-lg btn-info"
                          onClick={() => {
                            pageVisibility("addnewbook", null, true);
                          }}
                        >
                          New Book
                        </button>
                      </span>
                    </div>
                  )}
                </React.Fragment>
                <Pagination
                  currentPage={books.pageNumber}
                  totalPages={Math.ceil(books.totalBooks / pageSize)}
                  setCurrentPage={currentPage}
                />
              </React.Fragment>
            )}
          </React.Fragment>
        )}
      </div>
      <Footer />
    </div>
  );
};

export default ResourcesPage;
