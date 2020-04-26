import React from "react";

//Icons
import { MdKeyboardArrowLeft, MdKeyboardArrowRight } from "react-icons/md";

const Pagination = (props) => {
  const { currentPage, totalPages } = props;

  const setPage = (page) => {
    let CurrentPage = currentPage;
    if (typeof page === typeof "abc") {
      if ("next".localeCompare(page) === 0) {
        CurrentPage++;
      } else if ("prev".localeCompare(page) === 0) {
        CurrentPage--;
      } else if ("first".localeCompare(page) === 0) {
        CurrentPage = 1;
      } else if ("last".localeCompare(page) === 0) {
        CurrentPage = totalPages;
      }
    } else {
      if (page && page > 0) {
        CurrentPage = page;
      }
    }
    props.setCurrentPage(CurrentPage);
  };

  return (
    <React.Fragment>
      <div className="px-1 py-4 text-center">
        {currentPage !== 1 && (
          <button
            className="btn btn-sm btn-outline-info pr-2"
            onClick={() => {
              setPage("prev");
            }}
          >
            <span className="sr-only">prev</span>
            <MdKeyboardArrowLeft />
          </button>
        )}
        {[-3, -2, -1, 0, 1, 2, 3].map((val, index) => {
          if (val + currentPage > 0 && val + currentPage <= totalPages) {
            if (val === 0) {
              return (
                <p
                  key={index}
                  className="d-inline px-2"
                  style={{ fontSize: "12px" }}
                >
                  {val + currentPage}
                </p>
              );
            }
            return (
              <a
                key={index}
                href="#"
                className="d-inline px-2 active"
                onClick={(event) => {
                  event.preventDefault();
                  setPage(currentPage + val);
                }}
              >
                <samp style={{ fontSize: "12px" }}>{val + currentPage}</samp>
              </a>
            );
          }
          return;
        })}
        {currentPage !== totalPages && (
          <button
            className="btn btn-sm btn-outline-info pl-2"
            onClick={() => {
              setPage("next");
            }}
          >
            <span className="sr-only">next</span>
            <MdKeyboardArrowRight />
          </button>
        )}
      </div>
      <div className="px-2 py-1 text-center">
        {currentPage !== 1 && (
          <button
            className="btn btn-sm btn-outline-info mr-2"
            onClick={() => {
              setPage("first");
            }}
          >
            first
          </button>
        )}
        <button
          className="btn btn-sm btn-outline-info mx-2"
          onClick={() => {
            window.scrollTo({
              top: 0,
              behavior: "smooth",
            });
          }}
        >
          go to top
        </button>
        {currentPage !== totalPages && (
          <button
            className="btn btn-sm btn-outline-info ml-2"
            onClick={() => {
              setPage("last");
            }}
          >
            last
          </button>
        )}
      </div>
    </React.Fragment>
  );
};

export default Pagination;
