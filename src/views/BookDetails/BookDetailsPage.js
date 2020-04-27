import React from "react";

//Footer and Navbar
import Navbar from "views/Components/Navbar/Navbar";
import Footer from "views/Components/Footer/Footer";

//Sections
import BookDetails from "./Sections/BookDetails";

//virtual database (will be removed)
import allBooksData from "views/virtualDB/books/books";
import EditBookDetails from "./Sections/EditBookDetails";

const BookDetailsPage = (props) => {
  const type = {
    librarian: "librarian",
    student: "student",
    faculty: "faculty",
  };

  const [user, setUser] = React.useState({
    userType: null,
  });

  const [showEditBookDetails, setShowEditBookDetails] = React.useState(false);

  const [book, setBook] = React.useState({
    isFound: null,
    details: {
      thumbnailUrl: null,
      title: null,
      authors: [],
      categories: null,
      isbn: null,
      pageCount: null,
      status: null,
      shortDescription: null,
      longDescription: null,
    },
  });

  const fetchBookData = () => {
    if (!props.location.search) {
      //console.log("search Null");
      setBook((state) => {
        const Book = { ...state };
        Book.isFound = false;
        return Book;
      });
    } else if (!props.location.state) {
      //console.log("state is undefined");
      let params = new URL(
        "https://example.com" + props.location.pathname + props.location.search
      ).searchParams;
      let isbn = params.get("isbn");

      if (!isbn) {
        setBook((state) => {
          const Book = { ...state };
          Book.isFound = false;
          return Book;
        });
        return;
      }

      for (let i = 0; i < allBooksData.length; i++) {
        //console.log(allBooksData[i].isbn, i);
        if (
          allBooksData[i].isbn !== undefined &&
          isbn.localeCompare(allBooksData[i].isbn.trim()) === 0
        ) {
          //console.log("state is undefined book found");
          const Book = { ...book };
          Book.isFound = true;
          Book.details = { ...allBooksData[i] };
          setBook(Book);
          break;
        }
      }
      const Book = { ...book };
      Book.isFound = false;
      setBook(Book);
      //console.log("state is undefined book not found");
    } else {
      const Book = { ...book };
      Book.isFound = true;
      Book.details = { ...props.location.state.bookDetails };
      setBook(Book);
    }
  };

  const saveEditedBookDetails = (data) => {
    // console.log(data);

    setBook((state) => {
      const Book = { ...book };
      Book.details = { ...data };
      return Book;
    });

    setShowEditBookDetails((state) => {
      return !state;
    });
    //Return success
    return 1;
  };

  const handleClick = (args) => {
    if ("edit".localeCompare(args) === 0) {
      setShowEditBookDetails((state) => {
        return !state;
      });
    } else if ("delete".localeCompare(args) === 0) {
      //use axios delete
      props.history.push("/resources");
    }
  };

  React.useEffect(() => {
    fetchBookData();
    //set Usertype librarian
    setUser((state) => {
      const User = { ...state };
      User.userType = type.librarian;
      return User;
    });
    //console.log(book);
  }, []);

  return (
    <React.Fragment>
      <Navbar {...props} />
      <div
        className="p-3 pt-5 bg-light"
        style={{ marginTop: "0px", minHeight: "100vh" }}
      >
        {!book.isFound ? (
          <div className="row" style={{ height: "60vh" }}>
            <div className="col-md-6 offset-md-3 d-flex">
              <div className="align-self-center w-100">
                <div className="text-center">
                  <p className="h1 text-muted">Oops No Data Found</p>
                  <button className="btn btn-sm btn-outline-danger">
                    Back To Home
                  </button>
                </div>
              </div>
            </div>
          </div>
        ) : (
          <React.Fragment>
            {!showEditBookDetails ? (
              <div className="row pt-5">
                <div className="col-md-5">
                  <div className="text-center p-1">
                    <img
                      className="p-3"
                      style={{ width: "80%", height: "auto" }}
                      src={`${book.details.thumbnailUrl}`}
                      alt={book.details.title}
                    />
                  </div>
                  <div className="text-center p-2">
                    <button
                      className="btn btn-md btn-warning mr-2"
                      onClick={() => handleClick("edit")}
                    >
                      Edit Details
                    </button>
                    <button
                      className="btn btn-md btn-danger ml-2"
                      onClick={() => handleClick("delete")}
                    >
                      Delete Book
                    </button>
                  </div>
                </div>
                {/* Returns a col-md-7 div */}
                <BookDetails {...book} />
              </div>
            ) : (
              <React.Fragment>
                {type.librarian.localeCompare(user.userType) === 0 &&
                  showEditBookDetails && (
                    <EditBookDetails
                      goBack={() => handleClick("edit")}
                      dataToBeEdited={book.details}
                      saveEditedDetails={saveEditedBookDetails}
                    />
                  )}
              </React.Fragment>
            )}
          </React.Fragment>
        )}
      </div>
      <Footer />
    </React.Fragment>
  );
};

export default BookDetailsPage;
