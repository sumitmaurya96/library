import React from "react";

import Book from "./Book";

//CSS
import "./tableStyle.css";

const Table = (props) => {
  const trendingBooks = {
    Magazine: [
      {
        ISBN: "2345",
        Title: "BBC Dune",
        Type: "Story",
        Authors: "Frank Herbert",
        Copies: 40,
      },
      {
        ISBN: "2346",
        Title: "BBC Dune",
        Type: "Story",
        Authors: "Frank Herbert",
        Copies: 40,
      },
      {
        ISBN: "2347",
        Title: "BBC Dune",
        Type: "Story",
        Authors: "Frank Herbert",
        Copies: 40,
      },
    ],
    Journal: [
      {
        ISBN: "2345",
        Title: "BBC Dune",
        Type: "Story",
        Authors: "Frank Herbert",
        Copies: 40,
      },
      {
        ISBN: "2346",
        Title: "BBC Dune",
        Type: "Story",
        Authors: "Frank Herbert",
        Copies: 40,
      },
      {
        ISBN: "2347",
        Title: "BBC Dune",
        Type: "Story",
        Authors: "Frank Herbert",
        Copies: 40,
      },
    ],
    Departmental: [
      {
        ISBN: "2345",
        Title: "BBC Dune",
        Type: "Story",
        Authors: "Frank Herbert",
        Copies: 40,
      },
      {
        ISBN: "2346",
        Title: "BBC Dune",
        Type: "Story",
        Authors: "Frank Herbert",
        Copies: 40,
      },
      {
        ISBN: "2347",
        Title: "BBC Dune",
        Type: "Story",
        Authors: "Frank Herbert",
        Copies: 40,
      },
    ],
    Story: [
      {
        ISBN: "2345",
        Title: "BBC Dune",
        Type: "Story",
        Authors: "Frank Herbert",
        Copies: 40,
      },
      {
        ISBN: "2346",
        Title: "BBC Dune",
        Type: "Story",
        Authors: "Frank Herbert",
        Copies: 40,
      },
      {
        ISBN: "2347",
        Title: "BBC Dune",
        Type: "Story",
        Authors: "Frank Herbert",
        Copies: 40,
      },
    ],
  };

  return (
    <div id="myTable" className="container">
      <div className="row">
        <div className="col-md-3">
          <p className="h3">Magazines</p>
          <ul>
            {trendingBooks.Magazine.map((value, index) => {
              return (
                <li key={index} className="py-2">
                  <Book {...value} />
                </li>
              );
            })}
          </ul>
        </div>
        <div className="col-md-3">
          <h5 className="h3">Journals</h5>
          <ul>
            {trendingBooks.Journal.map((value, index) => {
              return (
                <li key={index} className="py-2">
                  <Book {...value} />
                </li>
              );
            })}
          </ul>
        </div>
        <div className="col-md-3">
          <h5 className="h3">Departmental</h5>
          <ul>
            {trendingBooks.Departmental.map((value, index) => {
              return (
                <li key={index} className="py-2">
                  <Book {...value} />
                </li>
              );
            })}
          </ul>
        </div>
        <div className="col-md-3">
          <h5 className="h3">Stories</h5>
          <ul>
            {trendingBooks.Story.map((value, index) => {
              return (
                <li key={index} className="py-2">
                  <Book {...value} />
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Table;
