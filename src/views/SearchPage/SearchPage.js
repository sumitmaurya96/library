import React from "react";
import axios from "axios";

//Components
import Navbar from "views/Components/Navbar/Navbar";
import Footer from "views/Components/Footer/Footer";

//Icons
import { MdSearch } from "react-icons/md";

//Image
import Loading from "assets/img/loading/loading.gif";

//Sections
import SearchResults from "./Sections/SearchResults";

const SearchPage = (props) => {
  const { apiLink, logOut } = props;
  const [search, setSearch] = React.useState({
    query: "",
    pageNumber: 1,
  });
  const [loading, setLoading] = React.useState(false);
  const [results, setResults] = React.useState({
    showSearchResults: false,
    totalBooks: -1,
    books: null,
  });

  const onInputChange = (text) => {
    setSearch((state) => {
      const Search = { ...state };
      Search.query = text;
      return Search;
    });
  };

  const onFormSubmit = () => {
    setLoading(true);
    axios
      .get(
        `${apiLink}/books/text-search/pageNumber=${search.pageNumber}&query=${search.query}`,
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
        }
      )
      .then((results) => {
        console.log(search);
        console.log(results);
        setResults((state) => {
          const Results = { ...state };
          Results.showSearchResults = true;
          Results.totalBooks = results.data.total;
          Results.books = results.data.books;
          setLoading(false);
          return Results;
        });
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <React.Fragment>
      <Navbar {...props} apiLink={apiLink} logOut={logOut} />
      {loading ? (
        <div className="d-flex" style={{ height: "100vh" }}>
          <div className="align-self-center w-100 text-center">
            <img width="64px" height="64px" src={Loading} />
          </div>
        </div>
      ) : (
        <React.Fragment>
          {results.showSearchResults ? (
            <SearchResults
              apiLink={apiLink}
              {...props}
              books={results.books}
              search={search}
              onFormSubmit={onFormSubmit}
              onInputChange={onInputChange}
            />
          ) : (
            <div className="d-flex" style={{ height: "80vh" }}>
              <div className="row m-0 align-self-center w-100">
                <div className="col-md-6 offset-md-3">
                  <p
                    className="text-info text-center"
                    style={{
                      fontSize: `${
                        16 +
                        ((40 - 16) * (window.innerWidth - 300)) / (1600 - 300)
                      }px`,
                    }}
                  >
                    Library Search
                  </p>
                  <form
                    className="input-group"
                    style={{
                      position: "relative",
                    }}
                    onSubmit={(event) => {
                      event.preventDefault();
                      onFormSubmit();
                    }}
                  >
                    <input
                      type="text"
                      value={search.query}
                      onChange={(event) => onInputChange(event.target.value)}
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
                      onClick={(event) => {
                        event.preventDefault();
                        onFormSubmit();
                      }}
                    >
                      <MdSearch />
                    </a>
                  </form>
                </div>
              </div>
            </div>
          )}
        </React.Fragment>
      )}
      <Footer />
    </React.Fragment>
  );
};

export default SearchPage;
