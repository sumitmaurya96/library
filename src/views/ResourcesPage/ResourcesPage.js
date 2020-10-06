import React from "react";
import axios from "axios";

//Component
import Navbar from "views/Components/Navbar/Navbar";
import Footer from "views/Components/Footer/Footer";

//page
import BookDetailsPage from "./Sections/BookDetailsPage/BookDetailsPage";

//Image
import Loading from "assets/img/loading/loading.gif";

//sections
import Pagination from "./Sections/Pagination";
import FilterSection from "./Sections/FilterSection";
import AddNewBook from "./Sections/AddNewBook";
import BookList from "./Sections/BookList";

//Role
import { librarian, admin } from "Helpers/Roles";

const ResourcesPage = (props) => {
  const fieldNames = {
    all: "All",
    magazine: "Magazines",
    journal: "Journals",
    departmental: "Departmental",
    story: "Story",
    it: "Information Technology",
    instru: "Instrumentation",
    printing: "Printing",
    power: "Power",
    construction: "Construction",
    hindi: "Hindi",
    english: "English",
    bengla: "Bengla",
  };

  const initialFilter = {
    contentType: {
      all: true,
      magazine: false,
      journal: false,
      departmental: false,
      story: false,
    },
    discipline: {
      all: true,
      it: false,
      instru: false,
      printing: false,
      power: false,
      construction: false,
    },
    language: {
      all: true,
      hindi: false,
      english: false,
      bengla: false,
    },
  };

  const { apiLink } = props;
  const { role, favourites, _id } = props.user.userData;
  const [filters, setFilters] = React.useState(initialFilter);
  const [loading, setLoading] = React.useState(false);
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

  const setFilterHandler = (filtersParams) => {
    console.log(filtersParams);

    setFilters((state) => {
      return filtersParams;
    });
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
    setLoading(true);
    let url;
    let query = "";
    let txtSearch = false;

    for (const filter in filters) {
      for (const field in filters[filter]) {
        if (filters[filter][field] && field !== "all") {
          query += " " + fieldNames[field];
          txtSearch = true;
        }
      }
    }

    if (txtSearch) {
      url = `${apiLink}/books/text-search/pageSize=${pageSize}&pageNumber=${books.pageNumber}&query=${query}`;
    } else {
      url = `${apiLink}/books/custom-search/pageSize=${pageSize}&pageNumber=${books.pageNumber}`;
    }

    console.log(url);

    axios
      .get(url, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      })
      .then(({ data }) => {
        console.log(data);
        setBooks((state) => {
          const Book = { ...state };
          Book.totalBooks = data.total;
          Book.data = data.books;
          setLoading(false);
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
  }, [books.pageNumber, flag, filters]);

  return (
    <div>
      <Navbar {...props} logOut={props.logOut} apiLink={apiLink} />
      {loading ? (
        <div className="d-flex" style={{ height: "100vh" }}>
          <div className="align-self-center w-100 text-center">
            <img width="64px" height="64px" src={Loading} />
          </div>
        </div>
      ) : (
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
                  <FilterSection
                    setFilterHandler={setFilterHandler}
                    defaultFilter={filters}
                    initialFilter={initialFilter}
                  />
                  <BookList
                    {...props}
                    apiLink={apiLink}
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
      )}
      <Footer />
    </div>
  );
};

export default ResourcesPage;
